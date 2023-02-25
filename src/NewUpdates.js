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

// Find a person by Name and set the person's age to 20 using Model.findOneAndUpdate()
const personName = 'Ahmed'; 
Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, function(err, updatedPerson) {
  if (err) {
    console.error(err);
  } else {
    console.log('Updated person:', updatedPerson);
  }
});