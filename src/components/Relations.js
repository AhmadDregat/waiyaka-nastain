import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import himg1 from "../images/humanrelation/1.jpg";
import himg2 from "../images/humanrelation/2.jpg";
import himg3 from "../images/humanrelation/3.jpg";
import himg4 from "../images/humanrelation/4.jpg";
import himg5 from "../images/humanrelation/5.jpg";
import himg6 from "../images/humanrelation/6.jpg";
import himg7 from "../images/humanrelation/7.jpg";
import pimg1 from "../images/peoplerelation/1.jpg";
import pimg2 from "../images/peoplerelation/2.jpg";
import pimg3 from "../images/peoplerelation/3.jpg";
import pimg4 from "../images/peoplerelation/4.jpg";
import pimg5 from "../images/peoplerelation/5.jpg";
import gimg1 from "../images/godrelation/1.jpg";
import gimg2 from "../images/godrelation/2.jpg";
import gimg3 from "../images/godrelation/3.jpg";
import gimg4 from "../images/godrelation/4.jpg";
import gimg5 from "../images/godrelation/5.jpg";
import gimg6 from "../images/godrelation/6.jpg";
export default function Relations(props) {
  const { relation } = useParams();
  function peopleR() {
    let photos = [
      { img: pimg1, desc: "img1" },
      { img: pimg2, desc: "img2" },
      { img: pimg3, desc: "img3" },
      { img: pimg4, desc: "img4" },
      { img: pimg5, desc: "img5" },
    ];
    return (
      <div>
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
  function godR() {
    let photos = [
      { img: gimg1, desc: "img1" },
      { img: gimg2, desc: "img2" },
      { img: gimg3, desc: "img3" },
      { img: gimg4, desc: "img4" },
      { img: gimg5, desc: "img5" },
      { img: gimg6, desc: "img6" },
    ];
    return (
      <div>
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
  function humanR() {
    let photos = [
      { img: himg1, desc: "img1" },
      { img: himg2, desc: "img2" },
      { img: himg3, desc: "img3" },
      { img: himg4, desc: "img4" },
      { img: himg5, desc: "img5" },
      { img: himg6, desc: "img6" },
      { img: himg7, desc: "img7" },
    ];
    return (
      <div>
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
  useEffect(() => {
    console.log(relation);
  }, []);

  switch (relation) {
    case "العلاقه مع النفس":
      return humanR();
      break;
    case "العلاقة مع الله":
      return godR();
      break;
    case "العلاقة مع الاخرين":
      return peopleR();
      break;
  }
}
