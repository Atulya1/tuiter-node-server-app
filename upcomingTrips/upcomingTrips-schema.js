import mongoose from "mongoose";
const { Schema } = mongoose;
const upcomingTripsSchema = new Schema({
                                         city_id: Object,
                                         place_id: String,
                                         city_name: String,
                                         date_of_travel: Date,
                                         itinerary: [],
                                         cost_of_trip: Number,
                                         difficulty: String,
                                         things_to_get: [],
                                         include: {
                                         food: Boolean,
                                             entrance_fee_rides:Boolean,
                                         transport_from_home: Boolean,
                                         private_transport: Boolean,
                                         ac_vehicle: Boolean},
                                         pickup:String,
                                         drop: String
                                     },{collection:'upcomingTrips'});

export default upcomingTripsSchema;