const menu = [
  ["ABOUT US", "Company Profile", "Brand Introduction", "Corporate Culture", "Honor & Awards", "Social Responsibilities", "Innovation", "Global Dongfeng"],
  ["DONGFENG NEWS", "News", "Exhibition Events", "Events & Activities", "Special Events", "Download"],
  ["SHOWROOM", "Car & SUV", "Minivan & MPV", "Pickup & Offroad", "Bus", "Truck", "Special"],
  ["SERVICES & SUPPORT", "Market News", "Services Consulting", "Catalogue Download", "Global Network", "INFORMATION DISCLOSURE"],
]

const Footer = () => {
  return (
    <footer className="border-t-2 border-lightGray py-10 mx-5">
      <div className="flex justify-center items-center gap-6 md:justify-start mb-16">
        <img className="w-8 h-8 xl:w-12 xl:h-12 cursor-pointer" src="./logo.svg" alt="logo"/>
        <span className="text-xl font-semibold xl:text-32px cursor-pointer">DONGFENG MOTOR</span>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {
          menu.map((menuBox, boxIndex) => (
            <ul key={`menubox${boxIndex}`}>
              {
                menuBox.map((item, index) => (
                  <li className={`my-3 ${index === 0 ? "text-lg font-medium xl:text-2xl pointer-events-none" : "cursor-pointer hover:text-lightCyan text-xs md:text-base"}`} key={index}>{item}</li>
                ))
              }
            </ul>
          ))
        }
      </div>
    </footer>
  );
};

export default Footer;