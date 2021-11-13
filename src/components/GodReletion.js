import React, { useState, useEffect } from "react";
import "../styles/HumanRelation.css";
import img1 from "../images/godrelation/1.jpg";
import img2 from "../images/godrelation/2.jpg";
import img3 from "../images/godrelation/3.jpg";
import img4 from "../images/godrelation/4.jpg";
import img5 from "../images/godrelation/5.jpg";
import img6 from "../images/godrelation/6.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Photo } from "@material-ui/icons";
export default function GodRelation() {
  let photos = [
    { img: img1, desc: "img1" },
    { img: img2, desc: "img2" },
    { img: img3, desc: "img3" },
    { img: img4, desc: "img4" },
    { img: img5, desc: "img5" },
    { img: img6, desc: "img6" },

  ];
  return (
    <div >
      <h2> العلاقه مع الله</h2>
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
