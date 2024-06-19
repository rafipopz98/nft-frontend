import React from "react";
import Style from "./Hero.module.css";
import { Button } from "../componentIndex";
import Image from "next/image";
import images from "../../img/index";
const Hero = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.hero_box}>
        <div className={Style.hero_box_left}>
          <h1>Discover, collect, and sell NFTs 🌇</h1>
          <p>some random shit on this hero page</p>
          <Button btnText={"Start your search"} handleClick={() => {}} />
        </div>
        <div className={Style.hero_box_right}>
          <Image src={images.herosvg} alt="hero img" height={600} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
