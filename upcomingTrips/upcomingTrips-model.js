import mongoose from 'mongoose';
import upcomingTripsSchema from "./upcomingTrips-schema.js";
const upcomingTripsModel = mongoose
    .model('UpcomingTripsModel', upcomingTripsSchema);
export default upcomingTripsModel;