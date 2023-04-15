const express = require("express");
const { EventModel } = require("../models/event.model");

const eventhomeRouter = express.Router();

eventhomeRouter.get("/", async (req, res) => {
  try {
    let data = await EventModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

eventhomeRouter.get("/filter/:game", async (req, res) => {
  const game = req.params.game;
  try {
    let data = await EventModel.find({ game: game });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

eventhomeRouter.get("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    let data = await EventModel.find({ _id: ID });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { eventhomeRouter };
