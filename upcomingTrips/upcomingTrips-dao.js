import upcomingTripsModel from "./upcomingTrips-model.js";
export const findUpcomingTrip = () => upcomingTripsModel.find();
export const createUpcomingTrip = (UpcomingTrip) => upcomingTripsModel.create(UpcomingTrip);
export const deleteUpcomingTrip = (UpcomingTripid) => upcomingTripsModel.deleteOne({_id: UpcomingTripid});
export const updateUpcomingTrip = (UpcomingTripid, UpcomingTrip) => upcomingTripsModel.updateOne({_id: UpcomingTripid}, {$set: UpcomingTrip})

export const findUpcomingTripById = (UpcomingTripid) => upcomingTripsModel.findOne({_id: UpcomingTripid});