import mongoose from 'mongoose';
import userDetailsSchema from './userDetails-schema.js'
const userDetailsModel = mongoose
    .model('UserDetailsModel', userDetailsSchema);
export default userDetailsModel;