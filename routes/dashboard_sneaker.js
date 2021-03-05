const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)

const SneakerModel = require("./../models/Sneaker");
const TagModel = require("./../models/Tag");
const UserModel = require("./../models/User");



router.get("/collections", async (req, res, next) => {
    console.log("tags")
    console.log(TagModel)
    try {
     //const sneakers = await SneakerModel.find();
    const tags = await TagModel.find();
    res.render("products", { tags });
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;