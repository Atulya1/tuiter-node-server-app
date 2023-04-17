import bucketListModel from "./bucketList-model.js";
export const findBucketList = () => bucketListModel.find();
export const createBucketList = (bucketListItem) => bucketListModel.create(bucketListItem);
export const deleteBucketList = (bucketListItemId) => bucketListModel.deleteOne({_id: bucketListItemId});
export const updateBucketList = (bucketListItemId, bucketListItem) => bucketListModel.updateOne({_id: bucketListItemId}, {$set: bucketListItem})

export const findBucketListById = (bucketListItemId) => bucketListModel.findOne({_id: bucketListItemId});

export const findAllBucketListItemsForUser = (userId) => bucketListModel.find({user_id:userId});