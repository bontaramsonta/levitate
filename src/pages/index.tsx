import { type NextPage } from 'next';
import Head from 'next/head';
// import Link from "next/link";
import Image from 'next/image';
import React from 'react';

// import { api } from "../utils/api";

const filters = {
  category: [
    'All products',
    'Outwear',
    'Bottoms',
    'Sweat Shirts',
    'T-Shirts',
    'Polos',
    'Jackets',
  ],
  'Discount Range': ['Above 15%', 'Above 20%', 'Above 30%', 'Above 50%'],
  Colours: [
    'Black',
    'Blue',
    'Green',
    'Grey',
    'Orange',
    'Pink',
    'Purple',
    'Red',
  ],
  Sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  Materials: ['Cotton', 'Polyester', 'Wool', 'Linen', 'Silk'],
} as const;

const demoProducts = [
  {
    id: 1,
    image: '/products/1.png',
    title: 'Recycled Jeans',
    price: 200,
    views: 12_000,
    rating: 4.5,
  },
  {
    id: 2,
    image: '/products/2.png',
    title: 'Organic Cotton Summer Wear',
    price: 610,
    views: 1_000,
    rating: 4.0,
  },
  {
    id: 3,
    image: '/products/3.png',
    title: 'Handcrafter Pure Cotton Coat',
    price: 290,
    views: 600,
    rating: 3.7,
  },
  {
    id: 4,
    image: '/products/4.png',
    title: 'Pure Cotton Char Coal Gray Sweatshirt',
    price: 599,
    views: 4_900,
    rating: 4.1,
  },
  {
    id: 5,
    image: '/products/5.png',
    title: 'Linen Black Dress',
    price: 789,
    views: 6_200,
    rating: 4.1,
  },
  {
    id: 6,
    image: '/products/6.png',
    title: 'White Pure Cotton Shirt',
    price: 309,
    views: 11_008,
    rating: 3.9,
  },
  {
    id: 7,
    image: '/products/7.png',
    title: 'Organic Cotton Cream Color Sweatshirt',
    price: 1_000,
    views: 8_800,
    rating: 4.4,
  },
  {
    id: 8,
    image: '/products/8.png',
    title: 'Recycled Cotton Jeans',
    price: 599,
    views: 4_900,
    rating: 4.1,
  },
  {
    id: 9,
    image: '/products/9.png',
    title: 'Hemp Shirt And Paint',
    price: 200,
    views: 12_000,
    rating: 4.5,
  },
  {
    id: 10,
    image: '/products/10.png',
    title: 'Organic Cotton Summer Wear',
    price: 610,
    views: 1_000,
    rating: 4.0,
  },
  {
    id: 11,
    image: '/products/11.png',
    title: 'Organic Cotton Summer Wear',
    price: 290,
    views: 600,
    rating: 3.7,
  },
  {
    id: 12,
    image: '/products/12.png',
    title: 'Bamboo Linen Tops Set Of 3',
    price: 599,
    views: 4_900,
    rating: 4.1,
  },
];

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Levitate</title>
        <meta name='description' content='sustainable clothing fashion brand' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <nav className='scroll fixed top-0 right-1/2 w-5/12 translate-x-1/2 py-10 md:right-5 md:translate-x-0 lg:right-10 xl:right-20'>
        <ul className='flex min-w-[20rem] justify-between text-lg font-semibold'>
          <li className='group'>
            <a
              href='#'
              className='relative inline-block delay-75 duration-150 after:absolute after:block after:h-0.5 after:w-0 after:bg-black after:transition-all group-hover:translate-x-1 group-hover:after:w-full'
            >
              Home
            </a>
          </li>
          <li className='group'>
            <a
              href='/about'
              className='relative inline-block delay-75 duration-150 after:absolute after:block after:h-0.5 after:w-0 after:bg-black after:transition-all group-hover:translate-x-1 group-hover:after:w-full'
            >
              Orders
            </a>
          </li>
          <li className='group'>
            <a
              href='/wishlist'
              className='relative inline-block delay-75 duration-150 after:absolute after:block after:h-0.5 after:w-0 after:bg-black after:transition-all group-hover:translate-x-1 group-hover:after:w-full'
            >
              Wishlist
            </a>
          </li>
          <li className='group'>
            <a
              href='/about'
              className='relative inline-block delay-75 duration-150 after:absolute after:block after:h-0.5 after:w-0 after:bg-black after:transition-all group-hover:translate-x-1 group-hover:after:w-full'
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <main className='mb-10 bg-background'>
        <section
          about='hero section'
          className='flex h-screen items-center space-x-5'
        >
          <Image
            className='w-full self-stretch object-cover'
            src='/hero.png'
            width={583}
            priority={true}
            height={1024}
            alt='awesome clothes on racks'
          />
          <header className='mt-5 flex max-h-[80vh] flex-grow flex-col items-end justify-center space-y-1 px-1 sm:space-y-3 sm:px-5 md:space-y-5 md:px-10 lg:space-y-10 xl:px-20'>
            <Image
              src='/logo_full.png'
              width={100}
              height={100}
              priority={true}
              alt='full logo of our company'
              className='h-24 w-24'
            />
            <h1 className='text-end text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl lg:leading-relaxed'>
              Sustainable fashion, right at your fingertips.
            </h1>
            <p className='max-h-60 overflow-hidden text-ellipsis text-end text-slate-500'>
              Shop smarter and more sustainably with State of Matter Apparel.
              Our clothing is made with sustainable materials, ethical
              manufacturing practices, and stylish designs so you can look good
              and feel good about the pieces in your wardrobe. Choose
              sustainability and join us in our mission to make fashion
              sustainable.
            </p>
            <button className='mt-4 rounded-md bg-primary px-4 py-4 font-semibold text-white transition-colors duration-300 hover:bg-black'>
              Start Shopping
            </button>
          </header>
        </section>
        <section
          about='our products'
          className='mx-20 mt-10 grid grid-cols-3 gap-20'
        >
          <h1 className='col-span-3 my-10 text-center text-4xl'>
            Our products
          </h1>
          <aside
            about='filters'
            className='col-span-1 flex flex-col space-y-5 md:space-y-10'
          >
            <fieldset className='flex flex-col space-y-4 md:space-y-8'>
              <legend
                about='category filter'
                className='mb-1 w-full border-b-2 border-slate-300 pb-1 font-semibold md:mb-3 md:pb-3 md:text-lg'
              >
                Category
              </legend>
              {filters.category.map((category) => (
                <React.Fragment key={category}>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='checkbox'
                      name={category}
                      id={category}
                      className='h-6 w-6 rounded-sm border-2 border-black text-black focus:ring-0 md:h-8 md:w-8'
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                </React.Fragment>
              ))}
            </fieldset>
            <fieldset className='flex flex-col space-y-4 md:space-y-8'>
              <legend
                about='discount filter'
                className='mb-1 w-full border-b-2 border-slate-300 pb-1 font-semibold md:mb-3 md:pb-3 md:text-lg'
              >
                Discount Range
              </legend>
              {filters['Discount Range'].map((discount) => (
                <React.Fragment key={discount}>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='radio'
                      name='discount'
                      id={discount}
                      className='h-6 w-6 border-2 border-black shadow-none checked:border-0 checked:text-black   checked:ring-0 focus:ring-0 md:h-8 md:w-8'
                    />
                    <label htmlFor={discount}>{discount}</label>
                  </div>
                </React.Fragment>
              ))}
            </fieldset>
            <fieldset className='flex flex-col space-y-4 md:space-y-8'>
              <legend
                about='colour filter'
                className='mb-1 w-full border-b-2 border-slate-300 pb-1 font-semibold md:mb-3 md:pb-3 md:text-lg'
              >
                Colours
              </legend>
              <div className='grid grid-cols-1 place-content-center place-items-stretch gap-y-4 gap-x-2 md:grid-cols-2'>
                {filters['Colours'].map((colour) => (
                  <React.Fragment key={colour}>
                    <div className='flex items-center space-x-3'>
                      <input
                        type='checkbox'
                        name='colour'
                        id={colour}
                        className='peer hidden'
                      />
                      <label
                        htmlFor={colour}
                        className='w-full rounded-md border-0 border-green-600 bg-white py-2 px-4 text-center peer-checked:border-2 peer-checked:bg-green-600/20'
                      >
                        {colour}
                      </label>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </fieldset>
            <fieldset className='flex flex-col space-y-4 md:space-y-8'>
              <legend
                about='size filter'
                className='mb-1 w-full border-b-2 border-slate-300 pb-1 font-semibold md:mb-3 md:pb-3 md:text-lg'
              >
                Sizes
              </legend>
              <div className='grid grid-cols-1 place-content-center gap-y-4 gap-x-2 md:grid-cols-4'>
                {filters['Sizes'].map((size) => (
                  <React.Fragment key={size}>
                    <div className='flex items-center space-x-3'>
                      <input
                        type='checkbox'
                        name='size'
                        id={size}
                        className='peer hidden'
                      />
                      <label
                        htmlFor={size}
                        className='w-full rounded-md border-0 border-green-600 bg-white py-2 px-4 text-center peer-checked:border-2 peer-checked:bg-green-600/20'
                      >
                        {size}
                      </label>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </fieldset>
          </aside>
          <main
            about='product cards'
            className='col-span-2 grid grid-flow-row auto-rows-max grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
          >
            {demoProducts.map((product) => (
              <div
                key={product.id}
                about='product card'
                className='row-span-1 flex w-full flex-col rounded-md bg-white shadow-md shadow-slate-500/20 transition-shadow duration-200 hover:shadow-xl md:max-w-[15rem]'
              >
                <Image
                  about='product image'
                  src={product.image}
                  alt={`${product.title} image`}
                  width={232}
                  height={248}
                  className='h-60 w-full rounded-t-md object-cover object-center'
                />
                <div
                  about='product card content'
                  className='flex flex-col justify-between py-3 px-2'
                >
                  <h2 about='product title'>{product.title}</h2>
                  <p>₹ {product.price}</p>
                  <p>
                    {product.rating}
                    {''}
                    <Image
                      src='/star.png'
                      width={16}
                      height={16}
                      className='mx-1 -mt-1.5 inline-block'
                      alt='star icon'
                    />
                    <span className='text-primary opacity-60'>
                      ({product.views}){''}
                    </span>
                    <Image
                      src='/eye.png'
                      width={16}
                      height={16}
                      className='-mt-1 ml-1 inline-block'
                      alt='eye icon'
                    />
                  </p>
                </div>
              </div>
            ))}
          </main>
        </section>
      </main>
    </>
  );
};

export default Home;
