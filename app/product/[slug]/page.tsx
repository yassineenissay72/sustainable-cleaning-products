"use client"
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { productCartType } from '@/app/cart/types'










const policies = [
  { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don&apos;t look at other tees" },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}





import Client from 'shopify-buy'
import Link from 'next/link'
import { reviews } from '@/app/reviews';
import Header from '@/app/components/header'




const Product = ({params}: any) => {

  // const singleProduct = use(fetchProduct(params.slug))

  const [singleProduct, setSingleProduct] = useState<any>(null)
  const [featuredProducts, setFeaturedProducts] = useState<any>(null)
  const [updatedCart, setUpdatedCart] = useState<boolean>(false)

  // console.log(singleProduct)


  useEffect( () => {
    const SHOPIFY_API_PUBLIC_ACCESS_TOKEN="44edaabee9bdd7fb7431f30fb89b87c2"
    const fetchProduct = async (id: string) => {

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
      const productId = 'gid://shopify/Product/'+id;
      // Use client.query and pass your query as `data`
      const productItem = await storefrontClient.product.fetch(productId)

      console.log(JSON.stringify(productItem));
      // return productItem
      setSingleProduct(productItem)
    }
  
    fetchProduct(params.slug)
    
  }, [params.slug])

  useEffect( () => {
    const SHOPIFY_API_PUBLIC_ACCESS_TOKEN="44edaabee9bdd7fb7431f30fb89b87c2"
    const fetchFeaturedProducts = async () => {
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
      const products = await storefrontClient.product.fetchAll(4)
      console.log(JSON.stringify(products));

      // return products
      setFeaturedProducts(products)
    }
    fetchFeaturedProducts()
  }, [])
  

    const reviewsList = reviews.filter((review) => review.productId === parseInt(params.slug))
    
    const addToCart = (product: productCartType)  => {
      // Get the existing cart items from local storage

      const cartItemsFromLocalStorage = typeof window !== "undefined" ? window?.localStorage?.getItem('cartItems') : null
      const existingCartItems = cartItemsFromLocalStorage? JSON.parse(cartItemsFromLocalStorage) : [];
    
      // Check if the product is already in the cart
      const isProductInCart = existingCartItems.some((item: { id: String }) => item.id === product.id);
    
      if (isProductInCart) {
        // If the product is already in the cart, update its quantity or any other property
        // based on your requirements
        // For this example, let's assume we are only storing the product once without quantity
        // alert('Product is already in the cart!');
        return;
      }

      setUpdatedCart(true)
    
      // Add the product to the cart
      const updatedCartItems = [...existingCartItems, product];
    
      // Save the updated cart items to local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
      // alert('Product added to cart successfully!');
    };


    
    

    return (
        <div className="bg-white">

        <Header updatedCart />
        
        <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
            {/* <ProductItem product={singleProduct} /> */}
            {
              singleProduct? (
                <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                  <div className="lg:col-span-5 lg:col-start-8">
                      <div className="flex justify-between">
                        <h1 className="text-xl font-medium ">{singleProduct.title}</h1>
                        <p className="text-xl font-medium ">${singleProduct.variants[0].price.amount}</p>
                      </div>
                      {/* Reviews */}
                      <div className="mt-4">
                        <h2 className="sr-only">Reviews</h2>
                        <div className="flex items-center">
                            <p className="text-sm ">
                            {reviewsList[0].average}
                            <span className="sr-only"> out of 5 stars</span>
                            </p>
                            <div className="ml-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                key={rating}
                                className={classNames(
                                  reviewsList[0].average > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                                />
                            ))}
                            </div>
                            <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                            ·
                            </div>
                            <div className="ml-4 flex">
                            <Link href="#review-section" className="text-sm font-medium text-[#4CA585] hover:text-[#4CA585]/90">
                                See reviews
                            </Link>
                            </div>
                        </div>
                      </div>
                  </div>

                  {/* Image gallery */}
                  <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                      <h2 className="sr-only">Images</h2>

                      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                          <Image
                          key={singleProduct.id.replace("gid://shopify/Product/","")}
                          src={singleProduct.images[0].src}
                          width={1610}
                          height={1240}
                          alt={singleProduct.title}
                          className={classNames(
                              'lg:col-span-2 lg:row-span-2 rounded-lg' 
                          )}
                          />
                      </div>
                  </div>

                  <div className="mt-8 lg:col-span-5">
                      {/* Product details */}
                      <div className="mt-10">
                      <h2 className="text-sm font-medium ">Description</h2>

                      <div
                          className="prose prose-sm mt-4 text-[#003E53]"
                      />
                        {singleProduct.description}
                      </div>
                      <form>
                      <button
                          onClick={() => addToCart({
                            id: singleProduct.id.replace("gid://shopify/Product/",""), 
                            quantity: 1, 
                            price: singleProduct.variants[0].price.amount, 
                            imageURI: singleProduct.images[0].src,
                            title: singleProduct.title,
                            productVariant: singleProduct.variants[0].id
                          })}
                          type="button"
                          className="mt-8 flex w-full items-center justify-center rounded-tl-3xl rounded-br-3xl border border-transparent bg-[#003E53] px-8 py-3 text-base font-medium text-white hover:bg-[#003E53]/80 focus:outline-none focus:ring-2 focus:ring-[#003E53] focus:ring-offset-2"
                      >
                          Add to cart
                      </button>
                      </form>

                      

                      {/* Policies */}
                      <section aria-labelledby="policies-heading" className="mt-10">
                      <h2 id="policies-heading" className="sr-only">
                          Our Policies
                      </h2>

                      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                          {policies.map((policy) => (
                          <div key={policy.name} className="rounded-lg border border-[#D1ECE7] bg-[#E6F2F0]/30 p-6 text-center">
                              <dt>
                              <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 " aria-hidden="true" />
                              <span className="mt-4 text-sm font-medium ">{policy.name}</span>
                              </dt>
                              <dd className="mt-1 text-sm ">{policy.description}</dd>
                          </div>
                          ))}
                      </dl>
                      </section>
                  </div>
                </div>
              ) : (
                null
              )
            }
            

            {/* Reviews */}
            <section aria-labelledby="reviews-heading" id="review-section" className="mt-16 sm:mt-24">
              <h2 id="reviews-heading" className="text-lg font-medium ">
                  Recent reviews
              </h2>

              <div className="mt-6 space-y-10 divide-y divide-[#D1ECE7] border-b border-t border-[#D1ECE7]/40 pb-10">
                  {reviewsList[0].featured.map((review) => (
                  <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                      <div className="flex items-center xl:col-span-1">
                          <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                              key={rating}
                              className={classNames(
                                  review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                              />
                          ))}
                          </div>
                          <p className="ml-3 text-sm ">
                          {review.rating}
                          <span className="sr-only"> out of 5 stars</span>
                          </p>
                      </div>

                      <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                          <h3 className="text-sm font-bold ">{review.title}</h3>

                          <div
                          className="mt-3 space-y-6 text-sm text-[#003E53]/70"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                          />
                      </div>
                      </div>

                      <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                      <p className="font-medium ">{review.author}</p>
                      <time
                          dateTime={review.datetime}
                          className="ml-4 border-l border-gray-200 pl-4  lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                      >
                          {review.date}
                      </time>
                      </div>
                  </div>
                  ))}
              </div>
              </section>

            {/* Related products */}
            {
              featuredProducts? (
                <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
                  <h2 id="related-heading" className="text-lg font-medium ">
                      Customers also purchased
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {featuredProducts.map((relatedProduct: any) => (
                        <Link key={relatedProduct.id} href={`/product/${relatedProduct.id.replace("gid://shopify/Product/","")}`} >
                          <div   className="group relative">
                              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80 bg-green-400">
                              <Image
                                  height={400}
                                  width={400}
                                  src={relatedProduct.images[0].src}
                                  alt={relatedProduct.title}
                                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                              </div>
                              <div className="mt-4 flex justify-between">
                              <div>
                                  <h3 className="text-sm ">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {relatedProduct.title}
                                  </h3>
                              </div>
                              <p className="text-sm font-medium ">${relatedProduct.variants[0].price.amount}</p>
                              </div>
                          </div>
                        </Link>
                      
                      ))}
                  </div>
                </section>
              ) : (
                null
              )
            }
            
        </main>
        </div>
    )
}

export default Product