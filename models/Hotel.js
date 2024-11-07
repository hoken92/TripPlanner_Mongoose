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

const hotelSchema = new Schema({
  type: String,
  hotel: {
    name: String,
    // type: String,
    cityCode: String,
    geolocation: pointSchema,
  },
  offers: [
    {
      checkInDate: Date,
      checkOutDate: Date,
      guests: {
        type: Number,
        min: 1,
        max: 10,
      },
      price: {
        currency: String,
        cost_total: Number,
      },
    },
  ],
});

hotelSchema.index({ hotel: 1 });

export default model("Hotel", hotelSchema);
