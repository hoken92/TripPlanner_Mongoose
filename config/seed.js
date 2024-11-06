import "dotenv/config";
// Require connection file to connect
import mongoose from "mongoose";

await mongoose.connect(process.env.ATLAS_URI);
// Require Models for delete and create operations
import Event from "../models/Event.js";
import User from "../models/User.js";

try {
  const events = [
    {
      event_name: "Coachella",
      location: {
        city: "Coachella",
        geolocation: {
          type: "Point",
          coordinates: [-116.173897, 33.680302],
        },
      },
      event_date: {
        start: "2025-04-11T00:00:00.000+00:00",
        end: "2025-04-13T00:00:00.000+00:00",
      },
    },
    {
      event_name: "Montreal Jazz Festival",
      location: {
        city: "Montreal",
        geolocation: {
          type: "Point",
          coordinates: [-73.566536, 45.508312],
        },
      },
      event_date: {
        start: "2025-06-26T00:00:00.000+00:00",
        end: "2025-07-05T00:00:00.000+00:00",
      },
    },
    {
      event_name: "Quebec City Summer Festival",
      location: {
        city: "Quebec",
        geolocation: {
          type: "Point",
          coordinates: [-71.2153, 46.8075],
        },
      },
      event_name: {
        start: "2025-07-03T00:00:00.000+00:00",
        end: "2025-07-13T00:00:00.000+00:00",
      },
    },
    {
      event_name: "TomorrowLand",
      location: {
        city: "Belgium",
        geolocation: {
          type: "Point",
          coordinates: [6.0695, 45.0892],
        },
      },
      event_name: {
        start: "2025-07-18T00:00:00.000+00:00",
        end: "2025-07-27T00:00:00.000+00:00",
      },
    },
    {
      event_name: "Lollapalooza Chicago",
      location: {
        city: "Chicago",
        geolocation: {
          type: "Point",
          coordinates: [-87.623177, 41.881832],
        },
      },
      event_name: {
        start: "2025-08-01T00:00:00.000+00:00",
        end: "2025-08-04T00:00:00.000+00:00",
      },
    },
    {
      event_name: "EDC Las Vegas",
      location: {
        city: "Las Vegas",
        geolocation: {
          type: "Point",
          coordinates: [-115.0104, 36.2725],
        },
      },
      event_name: {
        start: "2025-05-16T00:00:00.000+00:00",
        end: "2025-05-18T00:00:00.000+00:00",
      },
    },
    {
      event_name: "Austin City Limits",
      location: {
        city: "Austin",
        geolocation: {
          type: "Point",
          coordinates: [-97.773, 30.267],
        },
      },
      event_name: {
        start: "2025-10-03T00:00:00.000+00:00",
        end: "2025-10-05T00:00:00.000+00:00",
      },
    },
    {
      event_name: "Amsterdam Dance Event",
      location: {
        city: "Amsterdam",
        geolocation: {
          type: "Point",
          coordinates: [4.89707, 52.377956],
        },
      },
      event_date: {
        start: "2025-10-22T00:00:00.000+00:00",
        end: "2025-10-26T00:00:00.000+00:00",
      },
    },
  ];

  await Post.deleteMany({});
  await Event.deleteMany({});

  const createdEvents = await Event.create(events);

  console.log("Events: ", createdEvents);

  const hotels = [
    {
      title: "Star Wars",
      content: "its really cool",
      userId: createdUsers[2]._id,
    },
    {
      title: "MongoDB",
      content: "its a database",
      userId: createdUsers[0]._id,
    },
    {
      title: "Dogs are Cool",
      content: "Do i really need to explain??",
      userId: createdUsers[1]._id,
    },
  ];

  const createdPosts = await Post.create(posts);

  console.log("Posts: ", createdPosts);
} catch (err) {
  console.log(err);
} finally {
  await mongoose.connection.close();
}
