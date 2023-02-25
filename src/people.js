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

// Define an array of people to create
const arrayOfPeople = [
  { name: 'John Smith', age: 35, favoriteFoods: ['Pizza', 'Burgers'] },
  { name: 'Jane Doe', age: 28, favoriteFoods: ['Tacos', 'Sushi'] },
  { name: 'Bob Johnson', age: 42, favoriteFoods: ['Steak', 'Potatoes'] }
];

// Create the people in the array using Model.create()
Person.create(arrayOfPeople, function(err, people) {
  if (err) {
    console.error(err);
  } else {
    console.log('Created people:', people);
  }
});