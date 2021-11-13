import React, { useState, useEffect } from "react";
import "../styles/HumanRelation.css";
import img1 from "../images/humanrelation/1.jpg";
import img2 from "../images/humanrelation/2.jpg";
import img3 from "../images/humanrelation/3.jpg";
import img4 from "../images/humanrelation/4.jpg";
import img5 from "../images/humanrelation/5.jpg";
import img6 from "../images/humanrelation/6.jpg";
import img7 from "../images/humanrelation/7.jpg";

import Carousel from "react-bootstrap/Carousel";
import { Photo } from "@material-ui/icons";
export default function HumanRelation() {
  let photos = [
    { img: img1, desc: "img1" },
    { img: img2, desc: "img2" },
    { img: img3, desc: "img3" },
    { img: img4, desc: "img4" },
    { img: img5, desc: "img5" },
    { img: img6, desc: "img6" },
    { img: img7, desc: "img7" },
  ];
  return (
    <div >
      <h2> العلاقه مع النفس</h2>
      <Carousel fade>
        {photos.map((photo) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto h-50 "
                src={photo.img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{photo.desc}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
