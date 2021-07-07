// handles all requests to /api/students endpoint

module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/student.controllers");
  // configure routes based on combo of URL/VERB
  // GET all students
  // router.get("/", function (req, res) {
  //   res.send("You have reached the router for api/student/");
  // });
  router.get("/", controller.findAll);

  app.use("/api/student", router);
};
