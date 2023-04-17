import bookingsModel from "./bookings-model.js";
export const findBookings = () => bookingsModel.find();
export const createBookings = (bookings) => bookingsModel.create(bookings);
export const deleteBookings = (bookingsId) => bookingsModel.deleteOne({_id: bookingsId});
export const updateBookings = (bookingsId, bookings) => bookingsModel.updateOne({_id: bookingsId}, {$set: bookings})

export const findBookingsById = (bookingsId) => bookingsModel.findOne({_id: bookingsId});