const mongoose = require('mongoose');

// Define a Mongoose schema for a person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0 // Set a default value for age
  },
  favoriteFoods: {
    type: [String],
    default: [] // Set a default value for favoriteFoods
  }
});

// Create a Mongoose model for a person based on the personSchema
const Person = mongoose.model('Person', personSchema);

// Delete one person by the person's _id using Model.findByIdAndRemove()
const personId = '6ahmed'; 
Person.findByIdAndRemove(personId, function(err, removedPerson) {
  if (err) {
    console.error(err);
  } else {
    console.log('Removed person:', removedPerson);
  }
});