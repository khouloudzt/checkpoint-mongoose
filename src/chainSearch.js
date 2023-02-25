Person.find({ favoriteFoods: "burritos" })
  .sort("name")
  .limit(2)
  .select("-age")
  .exec(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });