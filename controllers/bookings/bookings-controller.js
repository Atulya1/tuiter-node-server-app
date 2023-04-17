import * as bookingsDao from "../../bookings/bookings-dao.js";

const findBookings  = async (req, res) => {
    const bookings = await bookingsDao.findBookings();
    res.json(bookings);
}

const addBookings = async (req, res) => {
    const bookings = req.body;
    console.log(bookings);
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
export default (app) => {
    app.get('/api/bookings/getBookings', findBookings);
    app.get('/api/bookings/getBookingsById/:bookingId',findBookingsById);
    app.post('/api/bookings/addBookings',addBookings);
    app.put('/api/bookings/updateBookings/:bookingId',updateBookings);
    app.delete('/api/bookings/deleteBookings/:bookingId',deleteBookings);
}