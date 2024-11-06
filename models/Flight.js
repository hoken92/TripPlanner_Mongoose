import { Schema, model } from "mongoose";

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const flightSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
  },
  destination: {
    type: String,
  },
  departureDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  },
  originGeoLocaton: {
    type: pointSchema,
  },
  price: {
    total: {
      type: Number,
    },
  },
});

export default model("Flight", flightSchema);
