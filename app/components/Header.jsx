import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
   <>
   <nav className="bg-blue-700 flex item-center px-4 py-6 justify-between mb-5">
    <div className="flex item-center">
       <Link  href="/">
       <div className="text-lg font-bold text-white uppercase">
        Clerk App
       </div>
</Link>
</div>
       <div className="text-white">
<Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>
Sign-In
</Link>
<Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>
Sign-Up
</Link>
</div>
   </nav>
   </>
  )
}

export default Header
