'use client'

import {  useEffect, useState } from 'react'
import {  ShoppingBagIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'




const offers = [
  { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
  { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
  { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
]

const incentives = [
  {
    name: 'Eco-Friendly',
    imageSrc: '/eco-friendly-icon.svg',
    description: "These products are environmentally friendly, contributing to a cleaner planet.",
  },
  {
    name: 'Effective',
    imageSrc: '/effective-icon.svg',
    description: "Despite being eco-friendly, they are just as effective as traditional cleaning products.",
  },
  {
    name: 'Wide Variety',
    imageSrc: '/wide-variety-icon.svg',
    description: "We offer a range of products, from surface cleaners to laundry detergents, catering to all home cleaning needs.",
  },
]

const incentives2 = [
  {
    name: 'Good for the Planet',
    imageSrc: '/good-for-the-planet-icon.svg',
    description: "By choosing our products, customers contribute to a healthier planet.",
  },
  {
    name: 'Safe for Use',
    imageSrc: '/safe-for-use-icon.svg',
    description: "Our products are safe for your home and family.",
  },
  {
    name: 'Cost-Efficient',
    imageSrc: '/cost-efficient-icon.svg',
    description: "Despite being eco-friendly, our products are competitively priced.",
  },
]

const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      '/avatar.png',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            '/avatar.png',
        },
      },
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            '/avatar.png',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            '/avatar.png',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            '/avatar.png',
        },
      },
      
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            '/avatar.png',
        },
      },
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            '/avatar.png',
        },
      },
      // More testimonials...
    ],
    
  ],
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const SHOPIFY_STORE_URL="https://greenplanet-sustainable-cleaning-products.myshopify.com/"





import Client from 'shopify-buy'
import Link from 'next/link'
const SHOPIFY_API_PUBLIC_ACCESS_TOKEN="44edaabee9bdd7fb7431f30fb89b87c2"





const Home = () => {
  const [productsr, setProductsr] = useState<any>([])

  const [cartItems, setCartItems] = useState<any>([])
  useEffect(() => {
    const cartItemsFromLocalStorage = typeof window !== "undefined" ? localStorage.getItem('cartItems') : null
    const cartItemsList = cartItemsFromLocalStorage? JSON.parse(cartItemsFromLocalStorage) : [];
    setCartItems(cartItemsList)
  }, [])
  

  

  console.log(cartItems)

  // const fetchProductsHandler = async () => {
  //   const fetchedProducts  = await fetchAll()
  //   //setProductsr(fetchedProducts)
  // }

  useEffect(() => {
    const fetchAll = async () => {
      // Load the access token as per instructions above
      const storefrontAccessToken = SHOPIFY_API_PUBLIC_ACCESS_TOKEN;
      // Shop from which we're fetching data
      const shop = 'greenplanet-sustainable-cleaning-products.myshopify.com'; // Remove 'https://' and trailing slash from the shop URL
      // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
      const storefrontClient =  new Client({
        storefrontAccessToken,
        domain: shop,
        apiVersion: '2023-10'
      });
      // Use client.query and pass your query as `data`
      const products = await storefrontClient.product.fetchAll()
      console.log(JSON.stringify(products));
      // return products
      setProductsr(products)
    }
    fetchAll()

  }, [])
  

  return (
    <div className="bg-white">

      <header className="relative overflow-hidden">
        {/* Top navigation */}
        <nav aria-label="Top" className="relative z-20  bg-opacity-100 backdrop-blur-xl backdrop-filter bg-[#D1ECE7]">
          <div className="mx-auto max-w-7xl pt-4 px-4 sm:px-6 lg:px-4 2xl:px-0">
            <div className="flex h-16 items-center">

              {/* Logo */}
              <div className=" flex lg:ml-0 ">
                <Link href="/">
                  <span className="sr-only">GreenPlanet</span>
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
                      className="h-6 w-6 flex-shrink-0  group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium  group-hover:text-[#003E53]">{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>

        {/* Hero section */}
        <section className="mn-0 bg-[#D1ECE7]">
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mt-0 mb-0 text-[36px] font-extrabold md:text-[40px] xl:text-[44px] text-[#003E53]">
                    GreenPlanet&apos;s Sustainable Clean: Good for You, Great for Earth
                  </h1>
                  <p className="mb-9 text-[#003E53]">GreenPlanet offers sustainable cleaning products that are not only effective for your home but also contribute to a healthier planet. Embrace a greener clean and be a part of our eco-conscious journey today.</p>
                  <a className="mb-2 inline-block rounded-tl-3xl rounded-br-3xl bg-[#003E53] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[#003E53]/80 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-[#003E53]/80 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-[#003E53]/80 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                      data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Discover Our Products</a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <Image src="/heroimage.webp" className="w-full" alt="" width={400} height={260} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div aria-label="Offers" className="order-last lg:order-first border border-b-[1px] border-t-[1px]">
            <div className="mx-auto max-w-7xl lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
              >
                {offers.map((offer, index) => (
                  <li key={offer.name+index} className="flex flex-col">
                    <a
                      href={offer.href}
                      className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                    >
                      <p className="text-sm ">{offer.name}</p>
                      <p className="font-semibold ">{offer.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
        

        {/* Products section */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="bg-white px-6 pb-12 sm:pb-16 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl text-[#003E53]">Our Products</h2>
                <p className="mt-6 text-lg leading-8  text-[#003E53]">
                Experience the power of sustainability with our range of eco-friendly and effective cleaning products.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {productsr.map((product: any, index: any) => (
                <Link key={product.id} href={`/product/${product.id.replace("gid://shopify/Product/","")}`} className="group text-sm">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      src={product.images[0].src}
                      alt={product.title}
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-[#003E53] font-bold">{product.title}</h3>
                  <p className="italic text-gray-500">in Stock</p>
                  <p className="mt-2 font-medium text-[#4CA585]">${product.variants[0].price.amount}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>



        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight ">
                    Why Choose GreenPlanet Cleaning Products?
                  </h2>
                  <p className="mt-4 ">
                    Our products combine effectiveness with environmental sustainability, catering to all your home cleaning needs.
                  </p>
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden bg-gray-100">
                  <Image
                    src="/features-image.webp"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                {incentives.map((incentive,index) => (
                  <div key={incentive.name+index} className="sm:flex lg:block">
                    <div className="sm:flex-shrink-0">
                      <Image className="h-16 w-16" src={incentive.imageSrc} alt="" width={64} height={64} />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="font-bold">{incentive.name}</h3>
                      <p className="mt-2 text-sm ">{incentive.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#E6F2F0] px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className=" font-bold text-[30px] ">
              Naturally Clean, Sustainably Caring
              </h2>
              <p>Join us in making a positive impact on the planet while ensuring a safe and clean home for your loved ones.</p>
            </div>
            <div className="mx-auto mt-24 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3 ">
              {incentives2.map((incentive, index) => (
                <div key={incentive.name+index} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <Image className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" width={64} height={64} />
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="font-bold">{incentive.name}</h3>
                    <p className="mt-2 text-sm ">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl tracking-tight sm:text-6xl font-extrabold text-[#4CA585]">
                  Market Trends
                  </h1>
                  <h1 className="text-[20px] font-semibold tracking-tight sm:text-[20px]  ">
                  Join the Sustainable Cleaning Revolution and be a part of improving the well-being of you, your beloved ones, and the planet.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                  The market for sustainable cleaning products is growing, expected to reach $110 billion in 2025. There is a clear shift towards environmentally friendly cleaning products, with the market growth rate for these products being twice as much as that for all cleaning products. Therefore, emphasizing the environmental sustainability of our products is crucial.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-tl-3xl rounded-br-3xl bg-[#003E53] px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-[#003E53]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003E53]"
                    >
                      Check our products
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="/tm5.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="/tm1.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/tm2.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="/tm3.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/tm4.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tigh">Testimonials</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Hear from Our Satisfied Customers
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight ">
                  <p>{`“${featuredTestimonial.body}”`}</p>
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                  <Image
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    width={40}
                    height={40}
                    src={featuredTestimonial.author.imageUrl}
                    alt=""
                  />
                  <div className="flex-auto">
                    <div className="font-semibold">{featuredTestimonial.author.name}</div>
                    <div className="">{`@${featuredTestimonial.author.handle}`}</div>
                  </div>
                  <Image width={40} height={40} className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
                </figcaption>
              </figure>
              {testimonials.map((columnGroup, columnGroupIdx) => (
                <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={classNames(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                          ? 'xl:row-span-2'
                          : 'xl:row-start-1',
                        'space-y-8'
                      )}
                    >
                      {column.map((testimonial, index) => (
                        <figure
                          key={testimonial.author.handle+index}
                          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                        >
                          <blockquote className="">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="mt-6 flex items-center gap-x-4">
                            <Image width={40} height={40} className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                            <div>
                              <div className="font-semibold">{testimonial.author.name}</div>
                              <div className="">{`@${testimonial.author.handle}`}</div>
                            </div>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      

        {/* CTA section */}
        <section aria-labelledby="sale-heading">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-[#003E53]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pb-16 pt-48 sm:pb-24">
                  <div>
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Shop Now 
                      <br />
                      for a Greener Clean
                    </h2>
                    <div className="mt-6 text-base">
                      <a href="#" className="font-semibold text-white">
                        Shop now
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product4.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product3.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product6.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product1.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product2.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product3.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>





    </div>
  )
}



export default Home