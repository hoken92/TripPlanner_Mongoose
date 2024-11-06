import express from "express";
import Trip from "../models/Trip.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
