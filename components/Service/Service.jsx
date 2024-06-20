import React from "react";
import Style from "./Service.module.css";
import Image from "next/image";
import images from "../../img";
const data = [
  {
    src: images.service1,
    step: "Step 1",
    title: "some random shit",
    desc: "some more random shit",
  },
  {
    src: images.service2,
    step: "Step 2",
    title: "some random shit",
    desc: "some more random shit",
  },
  {
    src: images.service3,
    step: "Step 3",
    title: "some random shit",
    desc: "some more random shit",
  },
  {
    src: images.service4,
    step: "Step 4",
    title: "some random shit",
    desc: "some more random shit",
  },
];
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        {data.map((item, index) => (
          <div key={index} className={Style.service_box_item}>
            <Image src={item.src} alt={item.src} width={100} height={100} />
            <p className={Style.service_box_item_step}>
              <span>{item.step}</span>
            </p>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
