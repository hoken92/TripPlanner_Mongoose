import express from "express";
import Flight from "../models/Flight.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.status(200).json(flights);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
