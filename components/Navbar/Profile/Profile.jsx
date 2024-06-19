import React from "react";
import Style from "./Profile.module.css";
import images from "../../../img";
import Image from "next/image";
import Link from "next/link";
import { FaUserEdit, FaRegImage, FaUserAlt } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          alt="profile image"
          src={images.user1}
          height={50}
          width={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>name name</p>
          <small>adress 0x,jdkjsjkk</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/my-profile" }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/my-items" }}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/edit-profile" }}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/disconnect" }}>Disconect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
