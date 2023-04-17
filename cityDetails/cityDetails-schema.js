import mongoose from "mongoose";
const { Schema } = mongoose;
const cityDetailsSchema = new Schema({
                                         city_name: {
                                             city: String,
                                             country: String
                                         },
                                         geolocation: {
                                             latitude:String,
                                             longitude:String
                                         },
                                         place_id: String,
                                         place_description: String,
                                         best_time_to_visit:[],
                                         places_to_see:[],
                                         places_to_eat:[]
                                     },{collection:'cityDetails'})

export default cityDetailsSchema;