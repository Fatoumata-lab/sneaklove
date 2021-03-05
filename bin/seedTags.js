require("dotenv").config();
require("../config/mongodb");

const TagModel = require("../models/Tag");

const tags =[
    {
    label: "running"
    },

    {
    label: "fitness"
    },
    {
    label: "lifestyle"
    },
];

TagModel.insertMany(tags)
  .then((tagsFromDb) => {
    console.log(tagsFromDb);
  })
  .catch((error) => {
    console.log(error);
  });