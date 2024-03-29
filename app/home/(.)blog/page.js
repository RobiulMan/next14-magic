import Link from "next/link";
export default function InterceptedBlog() {
  return (
    <>
      <section className="relative py-32 lg:py-36 bg-white ">
        <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
          <div className="text-6xl font-semibold text-gray-900 leading-none">
            Bring all your work together
          </div>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            A better experience for yout attendees and less stress yout team.
          </div>
          <div className="flex flex-col w-1/3">
            <Link
              className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
              href="/home"
            >
              Click to go to the home
            </Link>

            <Link
              className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
              href="/home/about"
            >
              Click to go to the About
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
