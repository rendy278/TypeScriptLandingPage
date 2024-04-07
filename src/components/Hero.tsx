const Hero = () => {
  return (
    <section className="h-screen pb-24 px-4 flex justify-center items-center">
      <div className="text-center  max-w-4xl text-white">
        <h1 className="font-bold capitalize lg:text-[64px] md:text-[55px] text-[40px] leading-tight ">
          Create Amazing Digital Product For Your Business
        </h1>
        <p className="text-base md:text-xl lg:text-lg leading-[27px] xl:w-10/12 mx-auto mt-8 mb-12">
          We are a professional digital agency that has been established since
          2016, we present a variety of digital services that can help you solve
          problems in your business
        </p>
        <button
          type="button"
          aria-label="Get Started"
          className="text-sky-400 rounded-md bg-white py-5 px-4 md:py-6 md:px-6 font-bold text-xl shadow"
        >
          Get Started <span aria-hidden="true">{"->"}</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
