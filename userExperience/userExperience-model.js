import mongoose from 'mongoose';
import userExperiencesSchema from "./userExperience-schema.js";
const userExperienceModel = mongoose
    .model('UserExperienceModel', userExperiencesSchema);
export default userExperienceModel;