import "dotenv/config";
// Require connection file to connect
import mongoose from "mongoose";

await mongoose.connect(process.env.ATLAS_URI);
// Require Models for delete and create operations
import Event from "../models/Event.js";
import Flight from "../models/Flight.js";
import Hotel from "../models/Hotel.js";
import Trip from "../models/Trip.js";

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
        start: new Date("2025-04-11"),
        end: "2025-04-13",
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
        start: "2025-06-26",
        end: "2025-07-05",
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
      event_date: {
        start: "2025-07-03",
        end: "2025-07-13",
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
      event_date: {
        start: "2025-07-18",
        end: "2025-07-27",
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
      event_date: {
        start: "2025-08-01",
        end: "2025-08-04",
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
      event_date: {
        start: "2025-05-16",
        end: "2025-05-18",
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
      event_date: {
        start: "2025-10-03",
        end: "2025-10-05",
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
        start: "2025-10-22",
        end: "2025-10-26",
      },
    },
  ];

  await Event.deleteMany({});
  await Flight.deleteMany({});
  await Hotel.deleteMany({});
  await Trip.deleteMany({});

  const createdEvents = await Event.create(events);

  console.log("Events: ", createdEvents);

  const hotels = [
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency Indio",
        cityCode: "INDIO",
        geolocation: {
          type: "Point",
          coordinates: [-116.173897, 33.680302],
        },
      },
      offers: [
        {
          checkInDate: "2025-04-11T00:00:00.000+00:00",
          checkOutDate: "2025-04-13T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 600,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Conan Indio",
        cityCode: "INDIO",
        geolocation: {
          type: "Point",
          coordinates: [-116.173897, 33.680302],
        },
      },
      offers: [
        {
          checkInDate: "2025-04-11T00:00:00.000+00:00",
          checkOutDate: "2025-04-12T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 950,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency Montreal",
        cityCode: "MONT",
        geolocation: {
          type: "Point",
          coordinates: [-73.566536, 45.508312],
        },
      },
      offers: [
        {
          checkInDate: "2025-06-26T00:00:00.000+00:00",
          checkOutDate: "2025-07-05T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 500,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Marriot Montreal",
        cityCode: "YUL",
        geolocation: {
          type: "Point",
          coordinates: [-73.566536, 45.508312],
        },
      },
      offers: [
        {
          checkInDate: "2025-06-26T00:00:00.000+00:00",
          checkOutDate: "2025-07-03T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 1000,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency Quebec",
        cityCode: "CYQB",
        geolocation: {
          type: "Point",
          coordinates: [-71.2153, 46.8075],
        },
      },
      offers: [
        {
          checkInDate: "2025-07-03T00:00:00.000+00:00",
          checkOutDate: "2025-07-13T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 440,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Renaissance Quebec",
        cityCode: "CYQB",
        geolocation: {
          type: "Point",
          coordinates: [-71.2153, 46.8075],
        },
      },
      offers: [
        {
          checkInDate: "2025-07-03T00:00:00.000+00:00",
          checkOutDate: "2025-07-13T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 1040,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency Belgium",
        cityCode: "BE",
        geolocation: {
          type: "Point",
          coordinates: [6.0695, 45.0892],
        },
      },
      offers: [
        {
          checkInDate: "2025-07-18T00:00:00.000+00:00",
          checkOutDate: "2025-07-27T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 630,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Four Seasons Belgium",
        cityCode: "BE",
        geolocation: {
          type: "Point",
          coordinates: [6.0695, 45.0892],
        },
      },
      offers: [
        {
          checkInDate: "2025-07-20T00:00:00.000+00:00",
          checkOutDate: "2025-07-25T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 1630,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency Chicago",
        cityCode: "ORD",
        geolocation: {
          type: "Point",
          coordinates: [-87.623177, 41.881832],
        },
      },
      offers: [
        {
          checkInDate: "2025-08-01T00:00:00.000+00:00",
          checkOutDate: "2025-08-04T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 1320,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Intercontental Chicago",
        cityCode: "ORD",
        geolocation: {
          type: "Point",
          coordinates: [-87.623177, 41.881832],
        },
      },
      offers: [
        {
          checkInDate: "2025-08-01T00:00:00.000+00:00",
          checkOutDate: "2025-08-04T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 450,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency LV",
        cityCode: "LV",
        geolocation: {
          type: "Point",
          coordinates: [-115.0104, 36.2725],
        },
      },
      offers: [
        {
          checkInDate: "2025-05-16T00:00:00.000+00:00",
          checkOutDate: "2025-05-18T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 762,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Bellagio LV",
        cityCode: "LV",
        geolocation: {
          type: "Point",
          coordinates: [-115.0104, 36.2725],
        },
      },
      offers: [
        {
          checkInDate: "2025-05-16T00:00:00.000+00:00",
          checkOutDate: "2025-05-18T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 1762,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency Austin",
        cityCode: "AUS",
        geolocation: {
          type: "Point",
          coordinates: [-97.773, 30.267],
        },
      },
      offers: [
        {
          checkInDate: "2025-10-03T00:00:00.000+00:00",
          checkOutDate: "2025-10-05T00:00:00.000+00:00",
          guests: 2,
          price: {
            currency: "USD",
            total_cost: 340,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hyatt Regency Amsterdam",
        cityCode: "AMS",
        geolocation: {
          type: "Point",
          coordinates: [4.89707, 52.377956],
        },
      },
      offers: [
        {
          checkInDate: "2025-10-22T00:00:00.000+00:00",
          checkOutDate: "2025-10-26T00:00:00.000+00:00",
          guests: 6,
          price: {
            currency: "USD",
            total_cost: 690,
          },
        },
      ],
    },
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        name: "Hotel Amsterdam",
        cityCode: "AMS",
        geolocation: {
          type: "Point",
          coordinates: [-116.173897, 33.680302],
        },
      },
      offers: [
        {
          checkInDate: "2025-04-11T00:00:00.000+00:00",
          checkOutDate: "2025-04-13T00:00:00.000+00:00",
          guests: 4,
          price: {
            currency: "USD",
            total_cost: 1100,
          },
        },
      ],
    },
  ];

  const createdHotels = await Hotel.create(hotels);

  console.log("Hotels: ", createdHotels);

  const flights = [
    {
      name: "LAX-PSP",
      origin: "LAX",
      destination: "PSP",
      departureDate: "2025-04-10T00:00:00.000+00:00",
      returnDate: "2025-04-14T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [-116.173897, 33.680302],
      },
      price: {
        total: 350.2,
      },
    },
    {
      name: "LAX-MONT",
      origin: "LAX",
      destination: "MONT",
      departureDate: "2025-06-25T00:00:00.000+00:00",
      returnDate: "2025-07-06T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [-73.566536, 45.508312],
      },
      price: {
        total: 250.2,
      },
    },
    {
      name: "LAX-CYQB",
      origin: "LAX",
      destination: "CYQB",
      departureDate: "2025-06-25T00:00:00.000+00:00",
      returnDate: "2025-07-04T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [-73.566536, 45.508312],
      },
      price: {
        total: 450.2,
      },
    },
    {
      name: "LAX-BE",
      origin: "LAX",
      destination: "BE",
      departureDate: "2025-07-17T00:00:00.000+00:00",
      returnDate: "2025-07-28T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [6.0695, 45.0892],
      },
      price: {
        total: 630.7,
      },
    },
    {
      name: "LAX-ORD",
      origin: "LAX",
      destination: "ORD",
      departureDate: "2025-07-31T00:00:00.000+00:00",
      returnDate: "2025-07-20T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [-87.623177, 41.881832],
      },
      price: {
        total: 360.52,
      },
    },
    {
      name: "LAX-LV",
      origin: "LAX",
      destination: "LV",
      departureDate: "2025-05-15T00:00:00.000+00:00",
      returnDate: "2025-05-19T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [-115.0104, 36.2725],
      },
      price: {
        total: 150.52,
      },
    },
    {
      name: "LAX-AUS",
      origin: "LAX",
      destination: "AUS",
      departureDate: "2025-10-02T00:00:00.000+00:00",
      returnDate: "2025-10-06T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [-97.773, 30.267],
      },
      price: {
        total: 520.49,
      },
    },
    {
      name: "LAX-AMS",
      origin: "LAX",
      destination: "AMS",
      departureDate: "2025-10-22T00:00:00.000+00:00",
      returnDate: "2025-10-26T00:00:00.000+00:00",
      destinationGeoLocaton: {
        type: "Point",
        geolocation: [4.89707, 52.377956],
      },
      price: {
        total: 858.01,
      },
    },
  ];

  const createdFlights = await Flight.create(flights);

  console.log("Flights: ", createdFlights);

  const trips = [
    {
      name: "First TomorrowLand",
      date: "2025-07-18T00:00:00.000Z",
      created_at: "2024-11-07T05:07:26.753Z",
    },
    {
      name: "My Draft Trip",
      date: "2025-05-19T00:00:00.000Z",
      created_at: "2024-11-07T05:13:39.986Z",
    },
    {
      name: "Last Vegas",
      date: "2025-04-19T00:00:00.000Z",
      created_at: "2024-11-07T05:15:40.857Z",
    },
  ];

  const createdTrips = await Trip.create(trips);

  console.log("Trips: ", createdTrips);
} catch (err) {
  console.log(err);
} finally {
  await mongoose.connection.close();
}
