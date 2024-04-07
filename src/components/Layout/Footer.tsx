import { IoLogoSoundcloud } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface FooterLink {
  title: string | JSX.Element;
  link: string;
}

const Footer = () => {
  const socialLinks: FooterLink[] = [
    { title: <FaFacebook />, link: "#" },
    { title: <FaInstagram />, link: "#" },
    { title: <FaWhatsapp />, link: "#" },
  ];

  const exploreLinks: FooterLink[] = [
    { title: "Resources", link: "#" },
    { title: "Blog", link: "#" },
    { title: "Documents", link: "#" },
    { title: "Services", link: "#" },
  ];

  const companyLinks: FooterLink[] = [
    { title: "About Us", link: "#" },
    { title: "Customers", link: "#" },
    { title: "Portfolio", link: "#" },
    { title: "Contact Us", link: "#" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto portofolio w-full">
      <div className="grid grid-cols-1 py-10 px-6 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-center gap-3">
        {/* Logo dan Deskripsi */}
        <article className="flex flex-col gap-3">
          <div className="logo">
            <a
              href="/"
              className="text-sky-500 font-semibold flex gap-x-1 items-center"
            >
              <IoLogoSoundcloud size={40} />
              <h1 className="text-2xl font-bold">BlueBash</h1>
            </a>
          </div>
          <p>
            Introducing, We are{" "}
            <span className="text-sky-500 font-semibold">BlueBash</span> digital
            agency company with more than 6 years of experience, We are
            committed to serve with all our heart
          </p>
          {/* Ikuti Kami */}
          <div className="flex gap-3 text-2xl text-sky-500 ">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.link}>
                {link.title}
              </a>
            ))}
          </div>
        </article>
        {/* Explore */}
        <article className="flex-col flex gap-3">
          <h1 className="font-bold text-xl">Explore</h1>
          <ul className="text-lg">
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </article>
        {/* Company */}
        <article className="flex-col flex gap-3">
          <h1 className="font-bold text-xl">Company</h1>
          <ul className="text-lg">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </article>
      </div>
      {/* Hak Cipta */}
      <div className="py-3 border-t-2 text-center">
        BlueBash &copy; {currentYear} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
