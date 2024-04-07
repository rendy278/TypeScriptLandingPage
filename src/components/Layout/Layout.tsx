import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "../Hero";
import HeroImg from "../../images/hero.jpg";

interface Statistic {
  value: string;
  label: string;
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const statistics: Statistic[] = [
    {
      value: "1.2K",
      label: "Happy Clients",
    },
    {
      value: "1.1K",
      label: "World Wide Clients",
    },
    {
      value: "6+",
      label: "Years of Experience",
    },
    {
      value: "12+",
      label: "Award Winners",
    },
  ];

  return (
    <section className="flex home flex-col w-full min-h-screen overflow-hidden">
      <header>
        <div
          className="h-screen"
          style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />
          <Hero />
        </div>
        <div className="mt-10">
          <div className="flex border mx-auto lg:w-[90%] w-[96%] font-semibold tracking-wide  shadow-md py-6  lg:px-10 px-4 rounded-md flex-wrap items-center justify-between">
            {statistics.map(({ value, label }) => (
              <div
                key={label}
                className="flex  text-sky-400 items-start justify-center w-6/12 mb-5 xl:block xl:w-auto xl:mb-0"
              >
                <div className="text-center">
                  <h3 className="text-2xl text-gray-600 lg:text-4xl text-primary font-semibold">
                    {value}
                  </h3>
                  <span className="text-lg text-gray-500">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
