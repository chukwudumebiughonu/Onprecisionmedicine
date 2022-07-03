import React, { useContext } from 'react';

import Link from 'next/link';

const categories =  [{name: 'Home', slug: 'home'}, { name: 'Topics', slug: 'topics'}, { name: 'News', slug: 'news'}, { name: 'Resources', slug: 'resources'}]
const   Header= () => {
  return (
    <div className= 'container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        On Precision Medicine
                    <img 
                    alt='kkkk'
                    src='https://www.istockphoto.com/photo/license-gm618067194-?utm_medium=organic&utm_source=google&utm_campaign=iptcurl'
                    />
                    </span>
                </Link>
            </div>
           <div className='hidden md:float-left md:contents'>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                        {category.name}
                    </span>
                </Link>
            ))}
           </div>
        </div>
     </div>
  )
}

export default Header; 
