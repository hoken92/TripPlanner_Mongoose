import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };

    const events = await Event.find(query);
    res.status(200).json(events);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.get("/", async (req, res) => {
  try {
    // If user provides a valid event name(Coachella, Austin Jazz Festival), webpage will populate the related event name
    // Use %20 for spaces
    const events = await Event.find(req.query).sort({ event_date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
