import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState } from "react";

const Layout = ({children}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={"container mx-auto " + (modal && "overflow-hidden h-screen")}>
      <Navbar setModal={setModal} modal={modal} />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;