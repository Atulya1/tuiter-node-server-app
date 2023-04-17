import mongoose from "mongoose";
const { Schema } = mongoose;
const bucketListSchema = new Schema({
    city_id:Object,
    user_id:Object
},{collection:'bucketList'})

export default bucketListSchema;