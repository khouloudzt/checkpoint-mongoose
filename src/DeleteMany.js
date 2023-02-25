Person.deleteMany({ name: "Mary" }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  