import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = ({children}) => {
  return (
    <div className="container mx-auto">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;