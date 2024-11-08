# Trip Planning Website

### Introduction

This Backend using Mongoose and MongoDB contains events, flights, hotels and trips made by users.

- Users have existing trips that contain events, flights and hotels.
- Event listings are displayed and have information on location, dates.
- Flight listings are displayed and have information on origin, destination, price, dates.
- Hotel listings are displayed and have information on hotel name, location, price, dates.

### Installation Guide

- Clone this repository
- Run npm install to install all dependencies
- Create an .env file in your project root folder and add your PORT variable.
- Run the config/seed.js file with node

### Usage

- Run npm run dev: to start the backend application.
- Connect to the API using Postman on port 3000.

### API Endpoints

| HTTP Verbs | Endpoints                       | Action                                                                    |
| ---------- | ------------------------------- | ------------------------------------------------------------------------- |
| Events     | ---------                       | ------                                                                    |
| GET        | /events                         | Retrieves all events                                                      |
| GET        | /events/:id                     | Retrieves an event by id param                                            |
| GET        | /events/:id/?event_name=value   | Retrieves event with event_name value                                     |
| GET        | /events/:id/trips               | Retrieves trips with an Event id param and populates the Event document   |
| Flights    | ---------                       | ------                                                                    |
| GET        | /flights                        | Retrieves all flights                                                     |
| GET        | /flights/:id                    | Retrieves an flights by id param                                          |
| GET        | /flights/:id/?destination=value | Retrieves hotels with valid destination,origin, or dates                  |
| GET        | /flights/:id/trips              | Retrieves trips with an flights id param and populates the Event document |
| Hotels     | ---------                       | ------                                                                    |
| GET        | /hotels                         | Retrieves all hotels                                                      |
| GET        | /hotels/:id                     | Retrieves an hotels by id param                                           |
| GET        | /hotels/:id/trips               | Retrieves trips with an hotel id param and populates the Event document   |
| Trips      | ---------                       | ------                                                                    |
| GET        | /trips                          | Retrieves all trips                                                       |
| POST       | /trips                          | Creates a trips                                                           |
| PATCH/PUT  | /trips/:id                      | Updates a trip by id param                                                |
| DELETE     | /trips/:id                      | Deletes a trip by id param                                                |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [Mongoose](https://mongoosejs.com/docs/) This is a NodeJS package that handles database requests and responses.
- [MongoDB](https://www.mongodb.com/docs/) Database

### Authors

- [Kenneth Ho](https://github.com/hoken92/)
