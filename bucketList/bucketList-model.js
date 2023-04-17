import mongoose from 'mongoose';
import bucketListSchema from "./bucketList-schema.js";
const bucketListModel = mongoose
    .model('bucketListModel', bucketListSchema);
export default bucketListModel;