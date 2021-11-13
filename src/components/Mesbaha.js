import React, { useState, useEffect } from "react";
import "../styles/mesba7aPage.css";
import axios from "axios";
export default function Mesbaha(props) {
  let [counter, setCounter] = useState(0);
  let userId = 0; // props.store.userId;

  useEffect(() => {}, [counter]);

  function saveCounter(counter) {
    axios.put(`/msbaha`, { user_id: userId, counter: counter });
  }

  useEffect(() => {
    axios.get(`/msbaha/${userId}`).then((res) => {
      setCounter(res);
    });
  }, []);

  return (
    <div>
      <h1>المسبحه الاكترونيه</h1>
      <hr />
      <div className="mesba7a-container">
        <div>
          <img
            className="mesba7a-image"
            src="https://img2.arabpng.com/20180402/twe/kisspng-prayer-beads-tasbih-allahumma-in-team-beads-5ac2884e937931.4519080415226983186041.jpg"
          />
        </div>
        <div>
          <a className="myButton" onClick={() => setCounter(++counter)}>
            سبح
          </a>
        </div>
        <div className="res_counter">{counter}</div>
        <div>
          <a
            className="resetBtn"
            onClick={() => {
              setCounter(0);
            }}
          >
            تصفير
          </a>

          <a className="myButton" onClick={saveCounter}>
            حفظ
          </a>
        </div>
        <div >
          <img className= "images_fo"
            src={
              "https://e7.pngegg.com/pngimages/720/715/png-clipart-arab-man-praying-illustration-prayer-salah-muslim-islam-allah-islam-hand-arm-thumbnail.png"
            }
            />
            <img  className= "images_fo"
            src={
              "https://e7.pngegg.com/pngimages/720/715/png-clipart-arab-man-praying-illustration-prayer-salah-muslim-islam-allah-islam-hand-arm-thumbnail.png"
            }
           
          />
      
        </div>
      </div>
    </div>
  );
}
