import React from "react";
import Style from "./Discover.module.css";
import Link from "next/link";
const Discover = () => {
  const data = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={Style.discover}>
          <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
