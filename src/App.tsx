import Contact from "./components/Contact";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portofolio";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <Layout>
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default App;
