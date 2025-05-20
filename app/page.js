'use client';

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[url('/bg-home.jpg')] bg-cover bg-no-repeat min-h-screen flex items-center justify-center px-6">
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-32 w-full max-w-7xl mt-16 md:mt-0">

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[428px]">
          <h3 className="condensed text-blue-200 text-lg md:text-2xl tracking-[4px]">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-white text-[80px] md:text-9xl mt-4 md:mt-6 leading-none">
            SPACE
          </h1>
          <p className="text-blue-200 text-base md:text-sm font-normal mt-6 leading-6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Explore Button */}
        <Link href="/destination">
          <div className="relative group cursor-pointer w-[184px] h-[184px] md:w-[274px] md:h-[274px] flex items-center justify-center">
            {/* Outer hover ring */}
            <div className="absolute w-full h-full rounded-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-200 ease-in-out z-0"></div>

            {/* Inner circle */}
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center z-10 transition-transform duration-200 group-hover:scale-105">
              <h2 className="text-black text-2xl md:text-3xl tracking-widest">EXPLORE</h2>
            </div>
          </div>
        </Link>

      </section>
    </main>
  );
}
