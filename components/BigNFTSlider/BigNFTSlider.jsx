import React, { useCallback, useState } from "react";
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Image from "next/image";
import { MdVerified, MdTimer } from "react-icons/md";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import Button from "../Button/Button";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
const sliderData = [
  {
    title: "title 1",
    id: 1,
    name: "some name",
    collection: "gg",
    price: "0006464 ETH",
    like: 243,
    image: images.user1,
    nftImage: images.nft_image_1,
    time: {
      days: 27,
      hours: 12,
      minutes: 13,
      seconds: 35,
    },
  },
  {
    title: "Enchanted Forest",
    id: 2,
    name: "Nature's Whisper",
    collection: "Mystic",
    price: "0.35 ETH",
    like: 1872,
    image: images.user2,
    nftImage: images.nft_image_2,
    time: {
      days: 105,
      hours: 18,
      minutes: 42,
      seconds: 11,
    },
  },
  {
    title: "Cyberpunk Cityscape",
    id: 3,
    name: "Neon Dreamscape",
    collection: "Tech Noir",
    price: "1.2 BTC",
    like: 749,
    image: images.user3,
    nftImage: images.nft_image_3,
    time: {
      days: 3,
      hours: 7,
      minutes: 21,
      seconds: 54,
    },
  },
  {
    title: "Cosmic Dance",
    id: 4,
    name: "Stardust Symphony",
    collection: "Celestial",
    price: "500 DAI",
    like: 3145,
    image: images.user4,
    nftImage: images.nft_image_1,
    time: {
      days: 14,
      hours: 1,
      minutes: 59,
      seconds: 23,
    },
  },
];
const BigNftSlider = () => {
  const [idNumber, setIdNumber] = useState(1);
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.lenght]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);
  return (
    <div className={Style.bigNftSlider}>
      <div className={Style.bigNftSlider_box}>
        <div className={Style.bigNftSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNftSlider_box_left_creator}>
            <div className={Style.bigNftSlider_box_left_creator_profile}>
              <Image
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
                className={Style.bigNftSlider_box_left_creator_profile_image}
              />
              <div
                className={Style.bigNftSlider_box_left_creator_profile_info}
              >
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.bigNftSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNftSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.bigNftSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className={Style.bigNftSlider_box_left_bidding}>
            <div className={Style.bigNftSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$24,000</span>
              </p>
            </div>
            <p className={Style.bigNftSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNftSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>
            <div className={Style.bigNftSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                  className={Style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>
            <div className={Style.bigNftSlider_box_left_button}>
              <Button btnText={"Place"} handleClick={() => {}} />
              <Button btnText={"View"} handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNftSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine
              className={Style.bigNftSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNftSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>
        <div className={Style.bigNftSlider_box_right}>
          <div className={Style.bigNftSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="nft image"
              className={Style.bigNftSlider_box_right_box_img}
            />
            <div className={Style.bigNftSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNftSlider;
