import React from "react";
import Style from "./Notificqation.module.css";
import Image from "next/image";
import images from "../../../img";
import { diffChars } from "../../../node_modules/ts-node/node_modules/diff/lib/index.es6";
const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            alt="profile image"
            src={images.user1}
            height={50}
            width={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>name name</h4>
          <p>idk some work</p>
          <small>2 mins ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
