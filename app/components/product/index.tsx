"use server"
import { productCartType } from '@/app/cart/types';
import { CurrencyDollarIcon, GlobeAmericasIcon, StarIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Image from 'next/image'

const productMock = {
    name: 'Basic Tee',
    price: '$35',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        id: 1,
        imageSrc: '/product1.webp',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false },
    ],
    description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
    details: [
      'Only the best materials',
      'Ethically and locally made',
      'Pre-washed and pre-shrunk',
      'Machine wash cold with similar colors',
    ],
  }

  const reviews = {
    average: 3.9,
    totalCount: 512,
    featured: [
      {
        id: 1,
        title: "Can't say enough good things",
        rating: 5,
        content: `
          <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
          <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
        `,
        author: 'Risako M',
        date: 'May 16, 2021',
        datetime: '2021-01-06',
      },
      // More reviews...
    ],
  }

const policies = [
    { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
    { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const ProductItem = ({product}: any) => {

    console.log(product)

    const addToCart = (product: productCartType)  => {
        // Get the existing cart items from local storage
        const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
        const existingCartItems = cartItemsFromLocalStorage? JSON.parse(cartItemsFromLocalStorage) : [];
      
        // Check if the product is already in the cart
        const isProductInCart = existingCartItems.some((item: { id: any }) => item.id === product.id);
      
        if (isProductInCart) {
          // If the product is already in the cart, update its quantity or any other property
          // based on your requirements
          // For this example, let's assume we are only storing the product once without quantity
          alert('Product is already in the cart!');
          return;
        }
      
        // Add the product to the cart
        const updatedCartItems = [...existingCartItems, product];
      
        // Save the updated cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      
        alert('Product added to cart successfully!');
      };

  return (
    <>
            
    </>
  )
}

export default ProductItem