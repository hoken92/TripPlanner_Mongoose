import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };

    const hotels = await Hotel.find(query);
    res.status(200).json(Hotel);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
