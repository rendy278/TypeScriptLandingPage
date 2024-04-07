import { FaFigma, FaCode } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import { MdOutlineDraw } from "react-icons/md";
import { TiPencil } from "react-icons/ti"; // TfiWrite diganti dengan TiPencil
import { IoIosSearch } from "react-icons/io"; // TbBrandZoom diganti dengan IoIosSearch
import Title from "./Title";

interface ServiceItem {
  title: string;
  content: string;
  Icon: JSX.Element;
}

const Service = () => {
  const services: ServiceItem[] = [
    {
      title: "UI/UX Designer",
      content:
        "We are ready to make your website more friendly and efficient in the eyes of users",
      Icon: <FaFigma />,
    },
    {
      title: "Web Development",
      content:
        "Want to create a website that has many features? We have the answer for you.",
      Icon: <FaCode />,
    },
    {
      title: "Content Writer",
      content:
        "We provide interesting content and can attract customers for you",
      Icon: <TiPencil />,
    },
    {
      title: "Branding",
      content:
        "Create visual branding with amazing result, you just sit back and relax",
      Icon: <IoIosSearch />,
    },
    {
      title: "Editing Camera",
      content:
        "Want to create a website that has many features? We have the answer for you.",
      Icon: <AiOutlineCamera />,
    },
    {
      title: "Illustration",
      content:
        "Create beauty illustration as you need, and make it interesting",
      Icon: <MdOutlineDraw />,
    },
  ];

  return (
    <section className="mx-auto  py-14 px-6 service lg:w-[90%] w-full">
      <Title title="Our Services" subtitle="We Provide What You Need" />
      <article className="grid lg:grid-cols-3 pt-4  md:grid-cols-2 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </article>
    </section>
  );
};

interface ServiceItemProps extends ServiceItem {}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, content, Icon }) => (
  <div className="flex flex-col items-center text-center shadow-md py-6 px-4">
    <div className="text-4xl text-primary mb-4 text-gray-600">{Icon}</div>
    <h3 className="text-xl font-bold text-gray-700 mb-2">{title}</h3>
    <p className="text-xl w-72 text-gray-500 font-semibold">{content}</p>
  </div>
);

export default Service;
