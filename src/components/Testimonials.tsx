import KattyClock from "../images/katty-clock.png";
import JohnRobert from "../images/john-robert.png";
import Paul from "../images/paul.png";
import Title from "./Title";

const Testimonials = () => {
  interface Testimonial {
    name: string;
    position: string;
    message: string;
    image: string;
    title: string;
  }

  const testimonials: Testimonial[] = [
    {
      name: "Katty Clock",
      position: "CEO My Hospital",
      title: "Website My Hospital",
      message:
        "Very nice to work with Bubble Bash, a reliable and responsive team is very helpful",
      image: KattyClock,
    },
    {
      name: "John Robert",
      position: "CEO F&B Corp",
      title: "Logo F&B Corp",
      message:
        "Really the best service we've ever gotten, really looking forward to the next project",
      image: JohnRobert,
    },
    {
      name: "Paul",
      position: "CEO SuperMarket",
      title: "SuperMart App Mobile",
      message:
        "Really the best service we've ever gotten, really looking forward to the next project",
      image: Paul,
    },
  ];

  return (
    <section className="mx-auto py-14 px-6 portofolio lg:w-[90%] w-full testimonials">
      <Title
        title="Client Reviews"
        subtitle="What Our Happy Client Say About Us"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white  shadow-md rounded-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-4">{testimonial.title}</h4>
            <p className="text-gray-800">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
