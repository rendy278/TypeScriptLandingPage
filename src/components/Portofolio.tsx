import React from "react";

import hospital from "../images/hospital.png";
import foodBeverages from "../images/food-beferage.png";
import supermarket from "../images/supermarket.png";
import Title from "./Title";

interface PortfolioItem {
  title: string;
  content: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const portfolios: PortfolioItem[] = [
    {
      title: "Website My Hospital",
      content:
        "Create a hospital website with patient, doctor, and drug logistics features that help hospital operations",
      image: hospital,
    },
    {
      title: "Food & Beverages Corp Logo",
      content:
        "Create a logo for a food & beverage company, with emphasis on aesthetics and user requests",
      image: foodBeverages,
    },
    {
      title: "Supermarket Mobile Apps",
      content:
        "Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features",
      image: supermarket,
    },
  ];

  return (
    <section className=" mx-auto py-14 px-6 portofolio lg:w-[90%] w-full">
      <Title title="Portfolio" subtitle="Recent Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolios.map((portfolio, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className="w-full h-auto mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold mb-2">{portfolio.title}</h3>
            <p>{portfolio.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
