import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

// Import our routers from routes folder
import eventsRouter from "./routes/events.js";
import tripsRouter from "./routes/trips.js";
import flightsRouter from "./routes/flights.js";
import hotelsRouter from "./routes/hotels.js";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

await mongoose.connect(process.env.ATLAS_URI);
console.log("Connected thru mongoose");

app.get("/", (req, res) => {
  res.send(`Welcome to my Event Booker API!`);
});

app.use("/events", eventsRouter);
app.use("/trips", tripsRouter);
app.use("/flights", flightsRouter);
app.use("/hotels", hotelsRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
