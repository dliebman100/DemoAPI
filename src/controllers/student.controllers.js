exports.findAll = (req, res) => {
  res.send("You have reached the controller for getting all Students");
};
exports.findById = (req, res) => {
  res.send(`You asked for student ${req.params.id}`);
};
