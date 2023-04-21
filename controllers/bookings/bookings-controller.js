import * as bookingsDao from "../../bookings/bookings-dao.js";
import * as upcomingTripsDao from "../../upcomingTrips/upcomingTrips-dao.js";

const findBookings  = async (req, res) => {
    const bookings = await bookingsDao.findBookings();
    res.json(bookings);
}

const addBookings = async (req, res) => {
    const bookings = req.body;
        const insertedBookings = await bookingsDao.createBookings(bookings);
        res.json(insertedBookings);
}

const updateBookings = async (req, res) => {
    const bookingIdToUpdate = req.params.bookingId;
    const updates = req.body;
    const status = await bookingsDao.updateBookings(bookingIdToUpdate,updates);
    res.json(status);
}
const deleteBookings = async (req, res) => {
    const deleteBookingItemId = req.params.bookingId;
    const status = await bookingsDao.deleteBookings(deleteBookingItemId);
    res.json(status);
}

const findBookingsById  = async (req, res) => {
    const bookingId = req.params.bookingId;
    console.log(bookingId);
    const booking = await bookingsDao.findBookingsById(bookingId);
    res.json(booking);
}
const findBookingsByUserId  = async (req, res) => {
    const userId = req.body.userId;
    const booking = await bookingsDao.findBookingsByUserId(userId);
    if(booking.length == 0) {
        res.json({status:204, message:"No Trips Found"});
    } else {
        const trip_details = [];
        for (var i = 0; i < booking.length; i++) {
            const trip_detail = await upcomingTripsDao.findUpcomingTripById(booking[i].trip_id);
            trip_details.push(trip_detail);
        }
        res.json(trip_details);
    }
}
export default (app) => {
    app.get('/api/bookings/getBookings', findBookings);
    app.get('/api/bookings/getBookingsById/:bookingId', findBookingsById);
    app.post('/api/bookings/addBookings', addBookings);
    app.post('/api/bookings/findBookingsByUserId', findBookingsByUserId);
    app.put('/api/bookings/updateBookings/:bookingId',updateBookings);
    app.delete('/api/bookings/deleteBookings/:bookingId',deleteBookings);
}