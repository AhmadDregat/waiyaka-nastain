const express = require("express");
const router = express.Router();

const db = require("../model/waiyakanastain");


router.get("/news", async (req, res) => {});
router.get("/info", async (req, res) => {});
router.get("/relationships", async (req, res) => {});
// users is optional 
router.get("/users", async (req, res) => {});


router.post("/users", async (req, res) => {});
router.post("/news", async (req, res) => {});
router.post("/relationships", async (req, res) => {});



router.delete("/users", async (req, res) => {});//optional
router.delete("/news", async (req, res) => {});
router.delete("/relationships", async (req, res) => {});
 
router.put("/users", async (req, res) => {});//optional
router.put("/news", async (req, res) => {});

router.put("/relationships", async (req, res) => {});
router.put("/info", async (req, res) => {});


module.exports = router;
