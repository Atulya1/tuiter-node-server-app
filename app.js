import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import UserDetailsController from "./controllers/userDetails/userDetails-controller.js";
import UserExperienceController from "./controllers/userExperiences/userExperience-controller.js";
import BucketListController from "./controllers/bucketList/bucketList-controller.js";
import BookingsController from "./controllers/bookings/bookings-controller.js";
import CityDetailsController from "./controllers/cityDetails/cityDetails-controller.js";
import UpcomingTripsController from "./controllers/upcomingTrips/upcomingTrips-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb+srv://webdevproject:chetanaatul@travel-plus.jiabsqz.mongodb.net/wanderer?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
UserDetailsController(app)
UserExperienceController(app)
BucketListController(app)
BookingsController(app)
CityDetailsController(app)
UpcomingTripsController(app)



app.listen(process.env.PORT || 4000);
