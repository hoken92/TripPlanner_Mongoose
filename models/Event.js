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

const eventSchema = new Schema({
  event_name: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    geolocation: {
      type: pointSchema,
      required: true,
    },
  },
  event_date: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
});

export default model("Event", eventSchema);
