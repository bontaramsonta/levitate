import { type NextPage } from 'next';
import Head from 'next/head';
// import Link from "next/link";
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import HeartButton from '../components/HeartButton';

import { api } from '../utils/api';
import type { Product, ProductFilters } from '../types/types';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { filterProducts } from '../utils/filterProducts';

const PRODUCTS_LIMIT = 10;

const FILTERS = {
  category: [
    'Outwear',
    'Bottoms',
    'Sweat Shirts',
    'T-Shirts',
    'Polos',
    'Jackets',
  ],
  discount: [15, 20, 30, 50],
  colours: [
    'Black',
    'Blue',
    'Green',
    'Grey',
    'Orange',
    'Pink',
    'Purple',
    'Red',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  materials: ['Cotton', 'Polyester', 'Wool', 'Linen', 'Silk'],
} as const;

const Home: NextPage = () => {
  const [page, setPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState<ProductFilters>({
    category: [],
    discount: [],
    colours: [],
    sizes: [],
    materials: [],
  });
  const { data } = api.product.getAll.useQuery(
    {
      page,
      limit: PRODUCTS_LIMIT,
      filters: appliedFilters,
    },
    {
      select: useCallback(
        (data: { products: Product[]; total: number }) => {
          // client-side filter products based on filters
          return {
            products: filterProducts(data.products, appliedFilters),
            total: data.total,
          };
        },
        [appliedFilters]
      ),
    }
  );
  const [parent] = useAutoAnimate<HTMLElement>();

  // for navbar scroll effect
  const [scroll, setScroll] = useState(0);
  const [demo, setDemo] = useState(false);

  const updateOnScroll = useCallback(() => {
    if (window) setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    if (document) {
      document.addEventListener('scroll', updateOnScroll);
    }
    return () => {
      if (document) {
        document.removeEventListener('scroll', updateOnScroll);
      }
    };
  });
  // ------------------------------

  // auto set page to 1 if no products are found and page is not 1
  useEffect(() => {
    if (data?.products.length === 0 && page !== 1) {
      setPage(1);
    }
  }, [data?.products.length, page]);

  return (
    <>
      <Head>
        <title>Levitate</title>
        <meta name='description' content='sustainable clothing fashion brand' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <nav
        className={
          'scroll fixed top-0 left-0 z-40 flex w-screen justify-end  px-1 transition-all duration-200 sm:px-5 md:px-10 lg:px-10 xl:px-20 ' +
          (scroll > 100 ? 'bg-white/20 py-4 backdrop-blur-md ' : 'py-8')
        }
      >
        <ul className='flex w-2/5 min-w-[20rem] justify-between text-lg font-semibold'>
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
      <main className='bg-background'>
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
          className='m-20 grid grid-cols-4 gap-10 xl:gap-20'
        >
          <h1 className='col-span-4 my-10 text-center text-4xl'>
            Our products
          </h1>
          <aside
            about='filters'
            className='col-span-1 flex max-w-[30vw] flex-col space-y-5 md:space-y-10'
          >
            <fieldset className='flex flex-col space-y-4 md:space-y-8'>
              <div className='mb-1 flex w-full justify-between border-b-2 border-slate-300 pb-1 md:mb-3 md:pb-3'>
                <legend
                  about='category filter'
                  className='font-semibold md:text-lg'
                >
                  Category
                </legend>
                <button
                  disabled={
                    !appliedFilters.category.length &&
                    !appliedFilters.colours.length &&
                    !appliedFilters.sizes.length &&
                    !appliedFilters.discount.length &&
                    !appliedFilters.materials.length
                  }
                  className='font-semibold text-slate-500 underline md:text-base'
                  onClick={() => {
                    setAppliedFilters({
                      category: [],
                      colours: [],
                      sizes: [],
                      discount: [],
                      materials: [],
                    });
                  }}
                >
                  clear all filters
                </button>
              </div>
              {FILTERS.category.map((category) => (
                <React.Fragment key={category}>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='checkbox'
                      onChange={(e) => {
                        setAppliedFilters((filters) => ({
                          ...filters,
                          category: e.target.checked
                            ? [...filters.category, category]
                            : filters.category.filter((c) => c !== category),
                        }));
                      }}
                      checked={!!appliedFilters.category.includes(category)}
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
              {FILTERS.discount.map((discount) => (
                <React.Fragment key={discount}>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='radio'
                      onClick={() => {
                        setAppliedFilters((filters) => ({
                          ...filters,
                          discount: filters.discount.find((c) => c === discount)
                            ? []
                            : [discount],
                        }));
                      }}
                      onChange={() => {
                        // to shutup react about controlled vs uncontrolled
                      }}
                      checked={!!appliedFilters.discount.includes(discount)}
                      name='discount'
                      id={`${discount}`}
                      className='h-6 w-6 border-2 border-black shadow-none checked:border-0 checked:text-black   checked:ring-0 focus:ring-0 md:h-8 md:w-8'
                    />
                    <label
                      htmlFor={`${discount}`}
                    >{`Above ${discount}%`}</label>
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
                {FILTERS.colours.map((colour) => (
                  <React.Fragment key={colour}>
                    <div className='flex items-center space-x-3'>
                      <input
                        type='checkbox'
                        onChange={(e) => {
                          setAppliedFilters((filters) => ({
                            ...filters,
                            colours: e.target.checked
                              ? [...filters.colours, colour]
                              : filters.colours.filter((c) => c !== colour),
                          }));
                        }}
                        checked={!!appliedFilters.colours.includes(colour)}
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
                {FILTERS.sizes.map((size) => (
                  <React.Fragment key={size}>
                    <div className='flex items-center space-x-3'>
                      <input
                        type='checkbox'
                        name='size'
                        onChange={(e) => {
                          setAppliedFilters((filters) => ({
                            ...filters,
                            sizes: e.target.checked
                              ? [...filters.sizes, size]
                              : filters.sizes.filter((s) => s !== size),
                          }));
                        }}
                        checked={!!appliedFilters.sizes.includes(size)}
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
            <fieldset className='flex flex-col space-y-4 md:space-y-8'>
              <legend
                about='material filter'
                className='mb-1 w-full border-b-2 border-slate-300 pb-1 font-semibold md:mb-3 md:pb-3 md:text-lg'
              >
                Materials
              </legend>
              {FILTERS.materials.map((material) => (
                <React.Fragment key={material}>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='checkbox'
                      name={material}
                      id={material}
                      className='h-6 w-6 rounded-sm border-2 border-black text-black focus:ring-0 md:h-8 md:w-8'
                    />
                    <label htmlFor={material}>{material}</label>
                  </div>
                </React.Fragment>
              ))}
            </fieldset>
          </aside>
          <main
            ref={parent}
            about='product cards'
            className='col-span-3 grid grid-flow-row auto-rows-max grid-cols-1 gap-y-10 sm:grid-cols-2 lg:gap-y-20 xl:grid-cols-3'
          >
            {!!data &&
              data.products.map((product) => (
                <div
                  key={product.id}
                  about='product card'
                  className='relative row-span-1 flex w-full min-w-[15rem] flex-col rounded-md bg-white shadow-md shadow-slate-500/20 transition-shadow duration-200 hover:shadow-xl md:max-w-[15rem]'
                >
                  <HeartButton
                    enabled={demo}
                    onClick={() => {
                      console.log('heart clicked');
                      setDemo(!demo);
                    }}
                    className='absolute top-2 right-2'
                  />
                  <Image
                    about='product image'
                    src={product.image}
                    alt={`${product.title} image`}
                    width={232}
                    height={248}
                    priority={true}
                    className='w-full rounded-t-md object-cover object-center'
                  />
                  <div
                    about='product card content'
                    className='flex h-full flex-col justify-between space-y-2 py-3 px-2'
                  >
                    <h2 about='product title'>{product.title}</h2>
                    <p>₹ {product.price}</p>
                    <p className='flex w-full items-center space-x-1'>
                      {product.rating}
                      {''}
                      <Image
                        src='/star.png'
                        width={16}
                        height={16}
                        className='mx-1 -mt-1.5 inline-block h-6 w-6'
                        alt='star icon'
                      />
                      <span className='text-primary opacity-60'>
                        ({product.views}){''}
                      </span>
                      <Image
                        src='/eye.png'
                        width={16}
                        height={16}
                        className=' ml-1 inline-block h-4 w-4'
                        alt='eye icon'
                      />
                    </p>
                  </div>
                </div>
              ))}
          </main>
          {!!data?.total && (
            <div className='col-span-3 col-start-2 flex justify-center space-x-10'>
              {Array.from(
                { length: Math.ceil(data.total / PRODUCTS_LIMIT) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      console.log('[set page]', i + 1);
                      setPage(i + 1);
                    }}
                    className={
                      'rounded-full py-3 px-5 text-center align-middle text-xl font-bold transition-colors   duration-200 hover:bg-primary hover:text-white ' +
                      (page === i + 1
                        ? 'bg-green-500/80 text-black'
                        : 'bg-green-500/40')
                    }
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          )}
        </section>
        <footer>
          <div
            about='footer main content'
            className='flex flex-wrap items-stretch space-y-5 bg-accent p-10'
          >
            <div className='mx-auto flex max-w-[40vw] flex-grow flex-col items-center justify-around space-y-3 md:max-w-[20vw]'>
              <Image
                src='/logo_full.png'
                width={100}
                height={100}
                priority={true}
                alt='full logo of our company'
                className='h-24 w-24'
              />
              <p className='text-primary/80'>
                &quot;Fashion Shouldn&apos;t Cost the Earth&quot;
              </p>
            </div>
            <div
              about='footer links'
              className='flex h-full min-w-[50vw] flex-grow flex-wrap justify-around self-center'
            >
              <ul className='flex min-w-max flex-col space-y-3 px-2'>
                <li>
                  <h2 className='font-semibold text-primary'>Product</h2>
                </li>
                <li>
                  <a href='#'>Overview</a>
                </li>
                <li>
                  <a href='#'>Features</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Releases</a>
                </li>
              </ul>
              <ul className='flex min-w-max flex-col space-y-3 px-2'>
                <li>
                  <h2 className='font-semibold text-primary'>Company</h2>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
                <li>
                  <a href='#'>News</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
              <ul className='flex min-w-max flex-col space-y-3 px-2'>
                <li>
                  <h2 className='font-semibold text-primary'>Resource</h2>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
                <li>
                  <a href='#'>Newsletter</a>
                </li>
                <li>
                  <a href='#'>Help Center</a>
                </li>
                <li>
                  <a href='#'>Support</a>
                </li>
              </ul>
              <ul className='flex min-w-max flex-col space-y-3 px-2'>
                <li>
                  <h2 className='font-semibold text-primary'>Social</h2>
                </li>
                <li>
                  <a href='#'>Twitter</a>
                </li>
                <li>
                  <a href='#'>Linkedin</a>
                </li>
                <li>
                  <a href='#'>Facebook</a>
                </li>
              </ul>
              <ul className='flex min-w-max flex-col space-y-3 px-2'>
                <li>
                  <h2 className='font-semibold text-primary'>Legal</h2>
                </li>
                <li>
                  <a href='#'>Terms</a>
                </li>
                <li>
                  <a href='#'>Privacy</a>
                </li>
                <li>
                  <a href='#'>Cookies</a>
                </li>
                <li>
                  <a href='#'>Licenses</a>
                </li>
              </ul>
              <ul className='flex min-w-max flex-col space-y-3 px-2'>
                <li>
                  <h2 className='font-semibold text-primary'>Product</h2>
                </li>
                <li>
                  <a href='#'>Overview</a>
                </li>
                <li>
                  <a href='#'>Features</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Releases</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            about='footer secondary content'
            className='flex justify-between bg-primary p-10'
          >
            <p className='text-white/80'>
              Mustaq Ahmed Ali, All Rights Reserved
            </p>
            <div className='flex items-center space-x-8'>
              <Image
                height={16}
                width={16}
                alt='linkedin logo'
                src='/linkedin.png'
                className='aspect-auto scale-150'
              />
              <Image
                height={16}
                width={16}
                alt='facebook logo'
                src='/facebook.png'
                className='aspect-auto scale-150'
              />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
