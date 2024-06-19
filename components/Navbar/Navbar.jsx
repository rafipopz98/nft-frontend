"use client";
import React, { useState } from "react";
import Style from "./Navbar.module.css";
import {
  Discover,
  HelpCenter,
  Notification,
  Profile,
  Sidebar,
} from "./NavbarIndex";
import images from "../../img";
import { Button } from "../componentIndex";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setHelpCenter(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setNotification(false);
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelpCenter(false);
    } else {
      setProfile(false);
    }
  };

  const openSidebarMenufn = () => {
    if (!openSidebarMenu) {
      setOpenSidebarMenu(true);
    } else {
      setOpenSidebarMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_left}>
          <div className={Style.logo}>
            <Image src={images.logo} height={100} width={100} alt="logo" />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_right}>
          {/* discover */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* help center */}

          <div className={Style.navbar_container_right_help_center}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {helpCenter && (
              <div className={Style.navbar_container_right_help_center_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* notification */}

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>
          {/*  create button section */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" handleClick={() => {}} />
          </div>

          {/* user profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                height={40}
                width={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>

          {/* Menu button mobile */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSidebarMenufn()}
            />
          </div>
        </div>
      </div>
      {/* sodebar */}

      {openSidebarMenu && (
        <div className={Style.sidebar}>
          <Sidebar setOpenSidebarMenu={setOpenSidebarMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
