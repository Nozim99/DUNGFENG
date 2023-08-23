import {Swiper} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {slideBox} from "./SlideBox.jsx";
import {useState} from "react";
import {AiOutlineLoading} from "react-icons/ai";


const Index = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="relative container mx-auto px-5  pt-28">
      <div className="absolute z-10 bottom-44 left-12 md:left-auto md:right-20 xl:right-28 xl:bottom-48">
        <div className="relative w-32 h-32 rounded-full border border-lightGray flex justify-center items-center">
          <h1 className="text-4xl font-medium xl:text-5xl">{currentSlideIndex + 1}</h1>
          <AiOutlineLoading className="absolute circle_pagination transition_rotate"
                            style={{rotate: `${currentSlideIndex * 360 / 3}deg`}}/>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => {
          setCurrentSlideIndex(swiper.activeIndex)
        }}
      >
        {slideBox("./showcase-img.svg", "DONGFENG AEOLUS HAOJI", 40976.23, "01", 0)}
        {slideBox("./CarDongfeng-Aeolus-Yixuan.png", "DONGFENG AEOLUS YIXUAN", 30976.00, "02", 120)}
        {slideBox("./tesla.png", "TESLA", 50976.00, "03", 240)}
      </Swiper>
    </div>
  );
};

export default Index;