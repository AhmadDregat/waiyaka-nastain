import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import useSound from "use-sound";
import "../styles/Home.css";
export default function Home() {
  const numAyatsQuran = Math.floor(Math.random() * 6348) + 10;

  const [state, setState] = useState({
    text: "",
    surah: "",
    audio: "",
    numberInSurah: "",
  });
  useEffect(() => {
    axios.get("http://localhost:5000/ayea").then((res) => {
      setState(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="home-contener">
      <div>
        <div>
          <h3>اية اليوم</h3>
        </div>
        <span>{state.text}</span>
        <br />
        <span>{state.surah}</span> <br />
        <span>{state.numberInSurah}</span>
        <br />
        <ReactAudioPlayer src={state.audio} volume controls />
      </div>
    </div>
  );
}
