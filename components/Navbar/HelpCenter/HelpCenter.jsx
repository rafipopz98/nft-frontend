import React from "react";
import Style from "./HelpCenter.module.css";
import Link from "next/link";
const HelpCenter = () => {
  const data = [
    {
      name: "About Us",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign In",
      link: "signin",
    },
    {
      name: "Sign Up",
      link: "signup",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {data.map((item, index) => (
        <div key={index} className={Style.helpcenter}>
          <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
