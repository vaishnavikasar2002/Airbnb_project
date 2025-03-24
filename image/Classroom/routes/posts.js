const express = require("express");
const app = express();
const router = express.Router()
const users = require("./users.js");

//posts
//index
router.get("/", (req,res)=>{
    res.send("GET for posts ");
});

//show 
router.get("/:id", (req,res)=>{
    res.send("GET for posts  id");
});

//post  
router.post("/", (req,res)=>{
    res.send("post for posts ");
});

//delete
router.delete("/:id", (req,res)=>{
    res.send("delete for posts ");
});

module.exports = router;
