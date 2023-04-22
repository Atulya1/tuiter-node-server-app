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
    places_visited: String,
    photos: String,
    date_of_review: String,
    estimated_expenses: Number,
    places_to_eat: String,
    places_to_shop: String,
    itinerary: String
},{collection:'userExperience'})

export default userExperiencesSchema;