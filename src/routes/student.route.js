// handles all requests to /api/students endpoint
module.exports = (app) => {
  // const router = require("express").Router();
  const students = require("../controllers/student.controller");

  const router = require("express").Router();
  // configure routes based on combo of URL/VERB
  // GET all students
  // router.get("/", function (req, res) {
  //   res.send("You have reached the router for api/student/");
  // });
  router.get("/", students.findAll);

  app.use("/api/student", router);
};
