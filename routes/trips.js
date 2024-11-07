import express from "express";
import Trip from "../models/Trip.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };

    const trips = await Trip.find(query);
    res.status(200).json(trips);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find(req.query);
    res.status(200).json(trips);
  } catch (err) {
    res.send(err).status(400);
  }
});

// Create a new Trip
router.post("/", async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a Trip
router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTrip);
  } catch (err) {
    res.send(err).status(400);
  }
});

// Delete a Trip
router.delete("/:id", async (req, res) => {
  try {
    const deletedTrip = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTrip);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
