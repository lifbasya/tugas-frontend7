export default function HomePage() {
  return (
    <main className="bg-[url('/bg-home.jpg')] bg-cover h-screen grid place-items-center">
      <section className="flex justify-center items-center w-full gap-64 mt-16">
        <div className="flex flex-col items-start justify-center max-w-[428px]">
          <h3 className="condensed text-blue-200 text-2xl tracking-[4px]">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-white text-9xl mt-6">
            SPACE
          </h1>
          <p className="text-blue-200 text-sm font-normal mt-6 leading-6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white w-[274px] h-[274px] rounded-full flex justify-center items-center">
            <h2 className="text-black text-3xl">EXPLORE</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
