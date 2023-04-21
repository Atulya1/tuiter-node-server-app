import * as upcomingTripsDao from "../../upcomingTrips/upcomingTrips-dao.js";
import * as cityDetailsDao from "../../cityDetails/cityDetails-dao.js";


const findUpcomingTrip  = async (req, res) => {
    const upcomingTrip = await upcomingTripsDao.findUpcomingTrip();
    res.json(upcomingTrip);
}

const addUpcomingTrip = async (req, res) => {
    const newUpcomingTrip = req.body;
    console.log(newUpcomingTrip);
    const insertedUpcomingTrip = await upcomingTripsDao
        .createUpcomingTrip(newUpcomingTrip);
    res.json({status:200, message:insertedUpcomingTrip});
}

const updateUpcomingTrip = async (req, res) => {
    const upcomingTripToUpdate = req.params.upcomingTripId;
    const updates = req.body;
    const status = await upcomingTripsDao
        .updateUpcomingTrip(upcomingTripToUpdate,
                    updates);
    res.json(status);

}
const deleteUpcomingTrip = async (req, res) => {
    const deleteUpcomingTrips = req.params.upcomingTripId;
    const status = await upcomingTripsDao
        .deleteUpcomingTrip(deleteUpcomingTrips);
    res.json(status);
}

const findUpcomingTripById  = async (req, res) => {
    const upcomingTripId = req.params.upcomingTripId;
    const upcomingTripDetails = await upcomingTripsDao.findUpcomingTripById(upcomingTripId)
    res.json(upcomingTripDetails);
}
export default (app) => {
    app.get('/api/trip/getUpcomingTrip', findUpcomingTrip);
    app.get('/api/trip/getUpcomingTrip/:upcomingTripId',findUpcomingTripById);
    app.post('/api/trip/addUpcomingTrip',addUpcomingTrip);
    app.put('/api/trip/updateUpcomingTrip/:upcomingTripId',updateUpcomingTrip);
    app.delete('/api/trip/deleteUpcomingTrip/:upcomingTripId',deleteUpcomingTrip);
}