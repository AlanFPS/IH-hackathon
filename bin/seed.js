const mongoose = require("mongoose");
const Lawyer = require("../models/Lawyers.model");


let lawyers = [
        {
        name: "Bob",
        location: "California",
        practice: true,
        fee: 650
        },
        
        {
        name: "Jane",
        location: "Florida",
        practice: false,
        fee: 300
        },

        {
        name: "Mary",
        location: "Washington",
        practice: true,
        fee: 50
        }
]

mongoose
  .connect('mongodb://localhost/IH-hackathon') //change exampleApp to your db name
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  Lawyer.create(lawyers)
  .then(function(results) {
      console.log("Lawyers saved", results)
      mongoose.connection.close()
  })
  .catch(function(error) {
      console.log("Something went wrong", error.message)
      mongoose.connection.close()
  })