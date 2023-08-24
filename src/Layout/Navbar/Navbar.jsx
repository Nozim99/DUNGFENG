import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useEffect, useState} from "react";

const menu = ["HOME", "SHOWROOM", "SERVICES & SUPPORT", "DONGFENG NEWS", "ABOUT US"]

const Navbar = () => {
  const [isModal, setIsModal] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollingUp(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [prevScrollPos]);

  return (
    <nav
      className={`z-20 bg-black p-5 border-b border-lightGray fixed top-0 left-0 w-full transition-transform duration-300 ${scrollingUp ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center container mx-auto">
        <img src="./logo.svg" className="cursor-pointer xl:pl-20 xl:h-12" alt="logo"/>
        <AiOutlineMenu onClick={() => setIsModal(true)} className="text-2xl text-white md:hidden cursor-pointer"/>
        <ul className="menu_ul hidden md:flex justify-between gap-4 text-sm xl:pr-20 xl:text-base">
          <li>HOME</li>
          <li>SHOWROOM</li>
          <li>SERVICES & SUPPORT</li>
          <li>DONGFENG NEWS</li>
          <li>ABOUT US</li>
        </ul>
        {
          isModal && <div className="fixed top-0 right-0 w-screen h-screen bg-black/10 z-10 backdrop-blur">
            <AiOutlineClose onClick={() => setIsModal(false)}
                            className="text-4xl absolute right-5 top-5 close_menu cursor-pointer"/>
            <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {
                menu.map((item, index) => (
                  <li
                    className="text-center text-28px my-3 whitespace-nowrap cursor-pointer hover:text-lightCyan transition"
                    key={index}>{item}</li>
                ))
              }
            </ul>
          </div>
        }

      </div>
    </nav>
  );
};

export default Navbar;