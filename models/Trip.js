import { Schema, model } from "mongoose";

const tripSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  event_info: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  flight_info: {
    type: Schema.Types.ObjectId,
    ref: "Flight",
  },
  hotel_info: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
});

export default model("Trip", tripSchema);
