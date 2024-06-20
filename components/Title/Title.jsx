import React from "react";
import Style from "./Title.module.css";
const Title = ({ title, desc }) => {
  return (
    <div className={Style.title}>
      <div className={Style.title_box}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Title;
