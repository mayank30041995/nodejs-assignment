module.exports = app => {
  const controller = require("../controllers/controller.js");

  const express = require('express');

  const router = express.Router();

  router.post("/api", controller.create);

  router.get("/api/age", controller.getallAge);

  router.get("/api/marks", controller.getcountMarks);

  app.use("/", router);
};