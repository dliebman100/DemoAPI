// handles all requests to /api/students endpoint
module.exports = (app) => {
  const router = require("express").Router();
  // configure routes bas on combo of URL/VERB
  // GET all students
  router.get("/", function (req, res) {
    res.send("You have reached the router for api/student/");
  });

  app.use("/api/student", router);
};
