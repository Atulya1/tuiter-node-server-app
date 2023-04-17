import cityDetailsModel from './cityDetails-model.js';
export const findCityDetails = () => cityDetailsModel.find();
export const createCityDetails = (cityDetails) => cityDetailsModel.create(cityDetails);
export const deleteCityDetails = (cityId) => cityDetailsModel.deleteOne({_id: cityId});
export const updateCityDetails = (cityId, cityDetails) => cityDetailsModel.updateOne({_id: cityId}, {$set: cityDetails})

export const findCityDetailsById = (cityId) => cityDetailsModel.findOne({_id: cityId});