import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="relative py-32 lg:py-36 bg-white ">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
            Distribute your brand from&nbsp;design to code
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
            href="/home"
          >

            Click to go to the home
          </Link>
        </div>
      </div>
    </section>
  );
}
