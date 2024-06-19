import React, { useState } from "react";
import images from "../../../img";
import Style from "./Sidebar.module.css";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiArrowSortedDown,
  TiSocialTwitter,
} from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { Button } from "../../componentIndex";
const Sidebar = ({ setOpenSidebarMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelpCenter, setOpenHelpCenter] = useState(false);

  const discoverData = [
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

  const helpcenterData = [
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
  const closeSidebar = () => {
    setOpenSidebarMenu(false);
  };

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };
  const openHelpMenu = () => {
    if (!openHelpCenter) {
      setOpenHelpCenter(true);
    } else {
      setOpenHelpCenter(false);
    }
  };

  return (
    <div className={Style.sidebar}>
      <GrClose
        className={Style.sidebar_closeBtn}
        onClick={() => closeSidebar()}
      />
      <div className={Style.sidebar_box}>
        <Image alt="logo" src={images.logo} height={150} width={150} />
        <p>idk some random shite here</p>
        <div className={Style.sidebar_socials}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className={Style.sidebar_menu}>
        <div>
          <div
            className={Style.sidebar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
            {openDiscover && (
              <div className={Style.sidebar_discover}>
                {discoverData.map((item, index) => {
                  <p className={S} key={index}>
                    <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                  </p>;
                })}
              </div>
            )}
          </div>
        </div>

        <div>
          <div
            className={Style.sidebar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
            {openHelpCenter && (
              <div className={Style.sidebar_discover}>
                {helpcenterData.map((item, index) => {
                  <p className={S} key={index}>
                    <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                  </p>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={Style.sidebar_button}>
        <Button btnText="Create" />
        <Button btnText="Connect Wallet" />
      </div>
    </div>
  );
};

export default Sidebar;
