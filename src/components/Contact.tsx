const Contact = () => {
  return (
    <section className="mx-auto py-10 flex justify-center items-center w-full contact">
      <div className="text-center max-w-4xl text-white">
        <h1 className="font-bold capitalize lg:text-[64px] md:text-[55px] text-[40px] leading-tight ">
          Have a project idea and want to make it come true?
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
          Contact Us <span aria-hidden="true">{"->"}</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
