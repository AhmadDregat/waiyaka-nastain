const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

const db = require("../model/waiyakanastain");

// router.post("/news",function(req,res){
//     const d=new db.News(req.body)
//     d.save()
//     res.end()
// })
let objAyeats = {};
var dayInMilliseconds = 1000 * 60 * 60 * 24;
function setAyeaObject(){
  let numAyatsQuran = Math.floor(Math.random() * 6348) + 10;
  axios
    .get(`http://api.alquran.cloud/v1/ayah/${numAyatsQuran}/ar.alafasy`)
    .then((results) => {
      let data = results.data.data;
      objAyeats.text = data.text;
      objAyeats.surah = data.surah.name;
      objAyeats.numberInSurah = data.numberInSurah;
      objAyeats.audio = data.audio;
    });
}
setAyeaObject()
setInterval(setAyeaObject, dayInMilliseconds);
router.get("/news", async (req, res) => {
  const news = await db.News.find();
  res.send(news);
});

router.get("/info", async (req, res) => {});
router.get("/relationships", async (req, res) => {});
// users is optional
router.get("/users", async (req, res) => {});

router.get("/ayea", async (req, res) => {
  res.send(objAyeats);
});

router.post("/users", async (req, res) => {});
router.post("/news", async (req, res) => {});
router.post("/relationships", async (req, res) => {});

router.delete("/users", async (req, res) => {}); //optional
router.delete("/news", async (req, res) => {});
router.delete("/relationships", async (req, res) => {});

router.put("/users", async (req, res) => {}); //optional
router.put("/news", async (req, res) => {});

router.put("/relationships", async (req, res) => {});
router.put("/info", async (req, res) => {});

module.exports = router;
