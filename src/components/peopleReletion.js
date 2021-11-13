import React, { useState, useEffect } from "react";
import "../styles/HumanRelation.css";
import img1 from "../images/peoplerelation/1.jpg";
import img2 from "../images/peoplerelation/2.jpg";
import img3 from "../images/peoplerelation/3.jpg";
import img4 from "../images/peoplerelation/4.jpg";
import img5 from "../images/peoplerelation/5.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Photo } from "@material-ui/icons";
export default function PeopleRelation() {
  let photos = [
    { img: img1, desc: "img1" },
    { img: img2, desc: "img2" },
    { img: img3, desc: "img3" },
    { img: img4, desc: "img4" },
    { img: img5, desc: "img5" },
  

  ];
  return (
    <div >
      <h2> العلاقه مع الاخرين</h2>
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
