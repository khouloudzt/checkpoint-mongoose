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

// Create a new person instance
const person = new Person({
  name: 'Ahmed Chachia',
  age: 35,
  favoriteFoods: ['Pizza', 'Burgers']
});

// Save the person instance to the database
person.save(function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('Saved person:', data);
  }
});