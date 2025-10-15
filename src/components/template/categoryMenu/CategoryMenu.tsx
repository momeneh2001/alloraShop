import React from 'react'
import Link from 'next/link'

function CategoryMenu() {
  return (
    
      <ul className='hidden lg:w-52 xl:w-72 xxl:w-80  xl:pl-6 xxl:pl-4 lg:flex flex-col gap-4  border-r-2 lg:pt-6 xl:pt-8 xxl:pt-10'>
        <li><Link href=''>Woman’s Fashion</Link></li>
        <li><Link href=''>Men’s Fashion</Link></li>
        <li><Link href=''>Electronics</Link></li>
        <li><Link href=''>Home & Lifestyle</Link></li>
        <li><Link href=''>Medicine</Link></li>
        <li><Link href=''>Sports & Outdoor</Link></li>
        <li><Link href=''>Baby’s & Toys</Link></li>
        <li><Link href=''>Groceries & Pets</Link></li>
        <li><Link href=''>Health & Beauty</Link></li>
      </ul>
    
  )
}

export default CategoryMenu
