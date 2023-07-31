'use client'
import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Dresses', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Denim', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
}
  
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Header = ({updatedCart}: { updatedCart: boolean}) => {
    const [open, setOpen] = useState(false)
    const [totalCart, setTotalCart] = useState(0)


    useEffect(() => {
      const cartItemsFromLocalStorage = typeof window !== "undefined" ? localStorage.getItem('cartItems') : null
      const cartItems = cartItemsFromLocalStorage? JSON.parse(cartItemsFromLocalStorage) : [];
    
      setTotalCart(cartItems.length)
      
    }, [])
    
    return (
        <>

            <header className="relative overflow-hidden">
                {/* Top navigation */}
                <nav aria-label="Top" className="relative z-20  bg-opacity-100 backdrop-blur-xl backdrop-filter bg-white border-b-[1px] border-[#E6F2F0] pb-4">
                <div className="mx-auto max-w-7xl pt-4 px-4 sm:px-6 lg:px-4 2xl:px-0">
                    <div className="flex h-16 items-center">

                    {/* Logo */}
                    <div className="ml-0 flex lg:ml-0 ">
                        <Link href="/">
                        <span className="sr-only">Your Company</span>
                        <Image
                            className="h-16 w-auto"
                            src="/greenplanet-logo.svg"
                            alt=""
                            width={222}
                            height={109}
                        />
                        </Link>
                    </div>


                    <div className="ml-auto flex items-center">

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-6">
                        <Link href="/cart" className="group -m-2 flex items-center p-2">
                            <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0  group-hover:text-text-[#003E53]/80"
                            aria-hidden="true"
                            />
                            <span className="ml-2 text-sm font-medium text-[#003E53] group-hover:text-[#003E53]/80">{totalCart}</span>
                            <span className="sr-only">items in cart, view bag</span>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>

                

            </header>

        </>
    )
}

export default Header