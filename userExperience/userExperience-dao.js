import userExperienceModel from "./userExperience-model.js";
export const findUserExperience = () => userExperienceModel.find();
export const createUserExperience = (userExperience) => userExperienceModel.create(userExperience);
export const deleteUserExperience = (userExperienceid) => userExperienceModel.deleteOne({_id: userExperienceid});
export const updateUserExperience = (userExperienceid, userExperience) => userExperienceModel.updateOne({_id: userExperienceid}, {$set: userExperience})

export const findUserExperienceById = (userExperienceId) => userExperienceModel.findOne({_id: userExperienceId});

export const findUserExperienceByUserId = (userId) => userExperienceModel.find({user_id: userId});

export const findUserExperienceByPlaceId = (placeId) => userExperienceModel.find({place_id: placeId});
