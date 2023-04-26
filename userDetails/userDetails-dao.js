import userDetailsModel from './usetDetails-model.js';
export const findUser = () => userDetailsModel.find();
export const createUser = (user) => userDetailsModel.create(user);
export const deleteUser = (userid) => userDetailsModel.deleteOne({_id: userid});
export const updateUser = (userid, user) => userDetailsModel.updateOne({_id: userid}, {$set: user})

export const findUserById = (userId) => userDetailsModel.findOne({_id: userId});

export const findUserByUsername = (userName) => userDetailsModel.findOne({username: userName});

export const findAdmin = () => userDetailsModel.findOne({role: "admin"});