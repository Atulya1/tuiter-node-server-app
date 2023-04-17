import mongoose from "mongoose";
const { Schema } = mongoose;
const userExperiencesSchema = new Schema({
    user_id : String,
    place_id: String,
    travel_place: String,
    travel_date: String,
    experience: {
        rating: String,
        heading: String,
        description: String
    },
    places_visited: [],
    photos: [],
    date_of_review: Date,
    estimated_expenses: Number,
    places_to_eat: [],
    places_to_shop: [],
    itinerary: []
},{collection:'userExperience'})

export default userExperiencesSchema;