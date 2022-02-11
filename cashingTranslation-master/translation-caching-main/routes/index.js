const express = require("express");
const cache = require("../routeCache");//for cashing 
const router = express.Router();
console.log("router running");//for checking routes
const translator = require("../controllers/translate");
const test = require("../controllers/test");

router.get("/translate", cashe(10),translator.translate );//use cashe as middleware before translating

router.get("/test1",test.test1);//testing

router.get("/test2", test.test2);//testing

module.exports = router;
