// handles all requests to /api/students endpoint
module.exports = (app) => {
  const router = require("express").Router();

  router.get("/", function (req, res) {
    res.send("You have reached the router for api/student/");
  });

  app.use("/api/student", router);
};
