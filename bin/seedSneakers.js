require("dotenv").config();
require("../config/mongodb");

const SneakerModel = require("../models/Sneaker");

const sneakers=[
    {
        name: "Nike",
    ref: "2X4ret",
    size: "32",
    description: "Blue with red stripes",
    price: 120,
    category:  "kids",
    },

    {
        name: "Adidas",
    ref: "3re2",
    size: 40,
    description: "white with blue",
    price: 130,
    category: "men", 
    },
    {
        name: "Reebok",
    ref: "qht2",
    size: 39,
    description: "Red with white stripes",
    price: 120,
    category:   "women",
    }
];

SneakerModel.insertMany(sneakers)
  .then((sneakerFromDb) => {
    console.log(sneakerFromDb);
  })
  .catch((error) => {
    console.log(error);
  });