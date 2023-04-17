import mongoose from "mongoose";
const { Schema } = mongoose;
const userDetailsSchema = new Schema({
    username: String,
    password: String,
    name: {
        firstName :String,
        lastName: String,
    },
    email: String,
    dob: String,
    phone_number: String,
    photo :String
},{collection:'userDetails'})

export default userDetailsSchema;