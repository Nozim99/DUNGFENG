import {Icon} from "@iconify/react";
import {useState} from "react";

const icons = ["mdi:car-suv", "mdi:van-utility", "mdi:car-pickup", "mdi:bus", "mdi:truck", "mdi:folder-star"]
const menu = ["Car & SUV", "Minivan & MPV", "Pickup & Offroad", "Bus", "Truck", "Special"]
const cars = [
  {imgUrl: "car1.png", name: "L60", price: 14436},
  {imgUrl: "car2.png", name: "S50", price: 20436},
  {imgUrl: "car3.png", name: "AX7", price: 15436},
]
const Models = () => {
  const [active, setActive] = useState("mdi:car-suv")
  const [liItem, setLiItem] = useState(0);

  return (
    <section className="container mx-auto px-5 my-24 xl:flex xl:justify-between">
      <div>
        <h1 className="text-center md:text-2xl xl:text-4xl mb-10">RECOMMENDED MODELS</h1>
        <ul className="relative flex justify-between xl:flex-col xl:gap-8">
          <div className="absolute hidden xl:block w-2.5 h-8 bg-lightCyan transition_top"
               style={{top: `${5.49 * liItem}rem`}}></div>
          {
            icons.map((item, index) => (
              <div className="md:mb-6 xl:ml-4" key={index}>
                <li className={`${active === item && "text-lightCyan"} cursor-pointer`} onClick={() => {
                  setActive(item);
                  setLiItem(index);
                }}>
                  <Icon icon={item} className="md:hidden text-2xl"/>
                  <span className={`hidden md:block md:text-22px xl:text-2xl relative xl:pl-5`}>
                    {menu[index]}
                    <div
                      className={`hidden md:block xl:hidden -bottom-3 absolute h-1.5 bg-lightCyan left-1/2 -translate-x-1/2 transition_top ${active === item ? "w-full" : "w-0"}`}></div>
                  </span>
                </li>

              </div>
            ))
          }
        </ul>
      </div>
      <div className="mt-10 flex flex-col xl:w-730">
        {cars.map((item, index) => (
          <div className={`${index % 2 === 1 && "md:self-end"} mb-10 xl:mb-20 md:w-530 xl:w-612`} key={index}>
            <div style={{backgroundImage: `url("./${item.imgUrl}")`}}
                 className="car_box h-60 bg-center bg-cover bg-no-repeat md:h-300 relative cursor-pointer">
              <div className="fire_logo absolute top-0 left-0 w-full h-full bg-black/50 justify-center items-center pointer-events-none">
                <img src="./firelogo.png" alt="fire logo"/>
              </div>
            </div>
            <ul className="flex justify-between items-center">
              <li className="bg-white text-2xl text-black font-medium px-6 py-1 md:px-10 md:py-3">{item.name}</li>
              <li className="text-xl">${item.price.toLocaleString("eu-EU")}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Models;