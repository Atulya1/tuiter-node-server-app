import mongoose from "mongoose";
const { Schema } = mongoose;
const bookingsSchema = new Schema({
    user_id:Object,
    trip_id:Object
},{collection:'bookings'})

export default bookingsSchema;