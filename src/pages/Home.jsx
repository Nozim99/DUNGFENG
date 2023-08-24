import Layout from "../Layout/Layout.jsx";
import Slide from "../components/Slide";
import Suppliers from "../components/Suppliers.jsx";
import Models from "../components/Models.jsx";
import AboutUs from "../components/AboutUs.jsx";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact.jsx";

const Home = () => {
  return (
    <Layout>
      <Slide/>
      <Suppliers/>
      <Models/>
      <AboutUs/>
      <FAQ/>
      <Contact/>
    </Layout>
  );
};

export default Home;