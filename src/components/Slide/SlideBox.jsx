import {SwiperSlide} from "swiper/react";
import {AiOutlineArrowUp} from "react-icons/ai";

export const slideBox = (imgUrl, title, price) => {
  return (
    <SwiperSlide style={{backgroundImage: `url("${imgUrl}")`}}
                 className="h-600px bg-center bg-no-repeat bg-cover flex items-end my-12 ">
      <div className="mx-8 w-full md:mx-14 mb-14 xl:mx-24">
        <div className="md:flex justify-between md:items-end">
          <div className="md:w-4/6">
            <div className="text-xl text-lightCyan xl:text-32px">NEW</div>
            <h1 className="text-40px font-semibold xl:text-64px">{title}</h1>
          </div>
          <div className="w-32 h-32 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mt-6 pt-6 border-t-2 border-lightGray xl:text-xl">
          <span className="flex items-center gap-2 text-lightCyan">SHOW MORE <AiOutlineArrowUp
            className="text-xl rotate-45"/></span>
          <span>${price.toLocaleString("ru-RU")}</span>
        </div>
      </div>
    </SwiperSlide>
  )
}