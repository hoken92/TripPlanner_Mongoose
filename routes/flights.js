import express from "express";
import Flight from "../models/Flight.js";
import Trip from "../models/Trip.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };

    const flights = await Flight.find(query);
    res.status(200).json(flights);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.get("/", async (req, res) => {
  try {
    // // If user provides a valid destination/origin key/values or dates
    // Use %20 for spaces
    const flights = await Flight.find(req.query);
    res.status(200).json(flights);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.get("/:id/trips", async (req, res) => {
  try {
    const query = { _id: req.params.id };

    const flight = await Flight.find(query);

    const trips = await Trip.find({ flight_info: flight[0]._id }).populate(
      "flight_info"
    );
    res.status(200).json(trips);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
