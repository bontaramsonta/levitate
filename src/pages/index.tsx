import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import Image from "next/image";

// import { api } from "../utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>Levitate</title>
        <meta name="description" content="sustainable clothing fashion brand" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <section about="hero section" className="flex h-screen space-x-5">
          <Image
            className="w-full object-cover"
            src="/hero.png"
            width={583}
            priority={true}
            height={1024}
            alt="awesome clothes on racks"
          />
          <div className="flex flex-grow flex-col items-end justify-center space-y-5 px-20">
            <Image
              src="/logo_full.png"
              width={100}
              height={100}
              priority={true}
              alt="full logo of our companyz"
            />
            <h1 className="text-end text-5xl font-bold">
              Sustainable fashion, right at your fingertips.
            </h1>
            <p className=" text-end text-slate-500">
              Shop smarter and more sustainably with State of Matter Apparel.
              Our clothing is made with sustainable materials, ethical
              manufacturing practices, and stylish designs so you can look good
              and feel good about the pieces in your wardrobe. Choose
              sustainability and join us in our mission to make fashion
              sustainable.
            </p>
            <button className="rounded-zmd mt-4 rounded-md bg-primary px-4 py-2 text-white">
              Shop Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
