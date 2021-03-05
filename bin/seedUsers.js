require("dotenv").config();
require("../config/mongodb");

const UserModel = require("../models/User");

const users =[
    {
    name: "Alexis",
    lastname: "Vevert",
    email: "alex.v@alex.com",
    password: "123456",
    },

    {
        name: "Victoria",
        lastname: "Virl",
        email: "vic.v@vic.com",
        password: "123456",
        },

      {
    name: "Fatou",
    lastname: "Diab",
    email: "fatou.d@fatou.com",
    password: "123456",
    },
];

UserModel.insertMany(users)
  .then((userFromDb) => {
    console.log(userFromDb);
  })
  .catch((error) => {
    console.log(error);
  });