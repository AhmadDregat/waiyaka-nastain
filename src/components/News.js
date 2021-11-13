import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
export default function News() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/news").then((res) => {
      setnews(res.data);
      console.log(res.data);
    });
  }, []);
 
  return (
    <div>
      {
        news.map((n,i)=>
          <Post post={n}/>
        )
      }
  
    </div>
  );
}
