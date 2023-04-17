import mongoose from 'mongoose';
import bookingsSchema from "./bookings-schema.js";
const bookingsModel = mongoose
    .model('bookingsModel', bookingsSchema);
export default bookingsModel;