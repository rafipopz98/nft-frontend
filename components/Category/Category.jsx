import React from "react";
import Style from "./Category.module.css";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

import images from "../../img";
const Category = () => {
  const categoryArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {categoryArray.map((item, index) => (
          <div className={Style.category_box} key={index}>
            <Image
              src={images.creatorbackground1}
              alt="bg image"
              width={350}
              height={150}
              objectFit="cover"
              className={Style.category_box_img}
            />
            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>Entertainmemt</h4>
                <small>1995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
