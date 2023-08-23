import React, { useRef, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ item, index, active, setActive }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    // Calculate the height of the content and set it dynamically
    if (contentRef.current) {
      setContentHeight(active === index ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [active, index]);

  return (
    <div>
      <div onClick={()=>setActive((typeof active === "number" && active === index) ? null : index)} className="cursor-pointer flex justify-between items-center border-b-2 border-lightGray py-2">
        <div className="font-medium text-sm md:text-lg xl:text-2xl w-7/12 md:w-10/12">{item.title.toUpperCase()}</div>
        <AiOutlinePlus className="text-xl md:text-2xl xl:text-3xl" />
      </div>
      <div
        className={`overflow-hidden text-sm md:text-base xl:text-lg my-3 px-1 ${active === index ? "height_show" : "height_hide"}`}
        style={{ maxHeight: contentHeight }}
        ref={contentRef}
      >
        {item.desc}
      </div>
    </div>
  );
};

export default Accordion;
