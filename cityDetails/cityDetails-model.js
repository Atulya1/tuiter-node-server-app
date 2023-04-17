import mongoose from 'mongoose';
import cityDetailsSchema from './cityDetails-schema.js'
const cityDetailsModel = mongoose
    .model('CityDetailsModel', cityDetailsSchema);
export default cityDetailsModel;