const imgUrl = ["./partners3.svg", "./Versace-Logo.svg", "./partners2.svg", "./partners.svg", "./mblogo.svg"]

const Suppliers = () => {
  return (
    <div className="container mx-auto px-5">
      <h1 className="mb-5 text-lightCyan text-center md:text-2xl xl:text-4xl md:mb-16 md:mt-20">OFFICIAL SUPPLIERS</h1>
      <ul className="grid grid-cols-3 gap-5 px-5 md:px-0 md:flex md:justify-between md:items-center">
        <>
          <li className={`mx-auto md:mx-0 xl:hidden`}><img src={"./partners3.svg"} alt={"partners3.svg"}/></li>
          <li className={`mx-auto md:mx-0 xl:hidden`}><img src={"./Versace-Logo.svg"} alt={"Versace-Logo.svg"}/></li>
          <li className={`mx-auto md:mx-0 xl:hidden`}><img src={"./partners2.svg"} alt={"partners2.svg"}/></li>
          <li className={`mx-auto md:mx-0 xl:hidden`}><img src={"./partners.svg"} alt={"partners.svg"}/></li>
          <li className={`mx-auto md:mx-0 xl:hidden w-40 relative left-5 md:relative-0 md:w-auto`}><img src={"./mblogo.svg"}
                                                                                              alt={"mblogo.svg"}/></li>
        </>
        <>
          <li className={`mx-auto md:mx-0 hidden xl:block`}><img src={"./partners3.png"} alt={"partners3.svg"}/></li>
          <li className={`mx-auto md:mx-0 hidden xl:block`}><img src={"./Versace-Logo.png"} alt={"Versace-Logo.svg"}/></li>
          <li className={`mx-auto md:mx-0 hidden xl:block`}><img src={"./partners2.png"} alt={"partners2.svg"}/></li>
          <li className={`mx-auto md:mx-0 hidden xl:block`}><img src={"./partners.png"} alt={"partners.svg"}/></li>
          <li className={`mx-auto md:mx-0 hidden xl:block w-40 relative left-5 md:relative-0 md:w-auto`}><img src={"./mblogo.png"}
                                                                                              alt={"mblogo.svg"}/></li>
        </>
      </ul>
    </div>
  );
};

export default Suppliers;