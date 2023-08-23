const AboutUs = () => {
  return (
    <section className="container mx-auto px-5 text-black bg-lightGray py-10">
      <h1 className="font-medium text-center mb-6 md:text-2xl xl:text-4xl xl:text-start">WHO ARE WE?</h1>
      <p
        className="text-sm md:text-lg XL:text-2xl text-textColor">{"Dongfeng Motor Corporation, founded in 1969, is one of".toUpperCase()}
        <span
          className="text-mainCyan">{"China’s largest automobile groups".toUpperCase()}</span>{". Our main business covers an entire range of commercial vehicles, passenger vehicles, auto assemblies, parts and components, machines and equipment, and other automobile-related products and services. Currently, DFM's sales revenue reached 90 billion USD in 2018 and has 150,000 employees.".toUpperCase()}
      </p>
      <h1 className="font-medium text-center mb-6 mt-10 md:text-2xl xl:text-4xl xl:text-start">AWWARDS</h1>
      <p className="text-sm md:text-lg XL:text-2xl text-textColor"><span
        className="text-mainCyan">{"Quality rating of Chinese car brands in 2022 for cars with internal combustion engines:".toUpperCase()}</span><br/>
        {"Dongfeng - Honda took the top spot as the most reliable car brand in 2022.".toUpperCase()}
      </p>
      <div className="flex flex-col gap-6 mt-6 md:hidden">
        <img src="./photo5.png" alt="photo5"/>
        <img src="./photo6.png" alt="photo6"/>
        <img src="./photo4.png" alt="photo4"/>
      </div>
      <div className="flex-col gap-10 mt-10 hidden md:flex md:flex-row xl:hidden md:justify-center">
        <img src="./md1.png" alt="photo5"/>
        <img src="./md2.png" alt="photo6"/>
        <img src="./md3.png" alt="photo4"/>
      </div>
      <div className="flex-col gap-10 mt-10 hidden xl:flex md:flex-row md:justify-center">
        <img src="./xl1.png" alt="photo5"/>
        <img src="./xl2.png" alt="photo6"/>
        <img src="./xl3.png" alt="photo4"/>
      </div>
    </section>
  );
};

export default AboutUs;