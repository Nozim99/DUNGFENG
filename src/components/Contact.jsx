
const Contact = () => {
  return (
    <div style={{backgroundImage:`url("./contact-bg.png")`}} className="bg-center bg-no-repeat bg-cover mb-20">
      <div className="relative container mx-auto px-5 py-8 md:px-20 md:py-28 xl:w-1/2 xl:m-0">
        <div className="absolute w-full h-full bg-black/40 top-0 right-0 backdrop-blur"></div>
        <h1 className="relative z-10 text-xl text-center font-medium md:text-4xl md:text-start text-lightCyan mb-8 md:mb-14">CONTACT</h1>
        <form>
          <label className="label_item" htmlFor="fullName">FULL NAME</label>
          <input className="input_item" type="text" name="fullName" id="fullName" placeholder="Maxpiraliyev Nozim" />

          <label className="label_item mt-8" htmlFor="email">EMAIL</label>
          <input className="input_item" type="email" id="email" name="email" placeholder="makhpiralievnozim@gmail.com" />

          <label className="label_item mt-8 mb-4 md:mb-8 md:mt-16" htmlFor="country">COUNTRY</label>
          <select className="text-black relative z-10 pl-3 pr-2 py-1 outline-none font-medium md:text-2xl" id="country" name="country">
            <option value="uz">UZBEKISTAN</option>
            <option value="us">AMERICA</option>
            <option value="ru">RUSSIA</option>
            <option value="cn">CHINA</option>
          </select>

          <button className="relative z-10 block w-full text-center bg-lightCyan text-black py-1.5 text-xl font-semibold mt-10 md:text-32px md:py-4">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;