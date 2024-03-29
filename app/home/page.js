import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <section className="relative py-32 lg:py-36 bg-white ">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1
            className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
          >
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
              New Blog{" "}
            </span>
            is the Best Ever.
          </h1>
          <p className="mt-8 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            repellat perspiciatis aspernatur quis voluptatum porro incidunt,
            libero sequi quos eos velit
          </p>
          <Link
            className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
            href="/home/blog"
          >
            Click to go to the blog
          </Link>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <Image
            src="/image1.webp"
            alt="Hero image"
            width="2350"
            height="2359"
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </section>
  );
}
