const mongoose = require("mongoose");
const User = require("../models/User.models");


let users = [
        {
        name: "Bob",
        age: 32,
        dob: 090909,
        },
        {
        name: "Jane",
        age: 31,
        dob: 090909,
        },
]

mongoose
  .connect('mongodb://localhost/IH-hackathon') //change exampleApp to your db name
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  User.create(users)
  .then(function(results) {
      console.log("Users saved", results)
      mongoose.connection.close()
  })
  .catch(function(error) {
      console.log("Something went wrong", error.message)
      mongoose.connection.close()
  })