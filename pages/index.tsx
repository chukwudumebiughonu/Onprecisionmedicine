import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
// import Image from 'next/image'

// const posts = [
//   {title: 'React Testing', excerpt: 'learn React Testing'},
//   {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
// ];
const Home: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>On Precision Medicine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
        {posts.map((post)=> <PostCard post={post.node} key={post.title}/>
        )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relatve top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return{
    props: { posts }
  }
} // fetching post
export default Home;
