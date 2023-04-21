import * as cityDetailsDao from "../../cityDetails/cityDetails-dao.js";
import {findCityIdByPlaceId} from "../../cityDetails/cityDetails-dao.js";

const findCityDetails  = async (req, res) => {
    const cityDetails = await cityDetailsDao.findCityDetails();
    res.json(cityDetails);
}

const addCityDetails = async (req, res) => {
    const newCity = req.body;
    console.log(newCity);
    const insertedCity = await cityDetailsDao.createCityDetails(newCity);
    res.json(insertedCity);
}

const updateCityDetails = async (req, res) => {
    const cityIdToUpdate = req.params.cityId;
    const updates = req.body;
    const status = await cityDetailsDao.updateCityDetails(cityIdToUpdate, updates);
    res.json(status);

}
const deleteCityDetails = async (req, res) => {
    const deleteCity = req.params.cityId;
    const status = await cityDetailsDao.deleteCityDetails(deleteCity);
    res.json(status);
}

const findCityDetailsById  = async (req, res) => {
    const cityId = req.params.cityId;
    console.log(cityId);
    const cityDetails = await cityDetailsDao.findCityDetailsById(cityId);
    res.json(cityDetails);
}

export const findCityDetailsByIdFunction = async (cityId) => {
    console.log(cityId);
    const cityDetails = await cityDetailsDao.findCityDetailsById(cityId);
    return cityDetails;
}

const findCityDetailsByPlaceId  = async (req, res) => {
    const placeId = req.params.placeId;
    console.log("Place Id",placeId);
    const cityDetails = await cityDetailsDao.findCityIdByPlaceId(placeId);
    res.json(cityDetails);
}

export default (app) => {
    app.get('/api/city/getCityDetails', findCityDetails);
    app.get('/api/city/getCityDetails/:cityId',findCityDetailsById);
    app.get('/api/city/getCityDetailsByPlaceId/:placeId',findCityDetailsByPlaceId);
    app.post('/api/city/addCityDetails', addCityDetails);
    app.put('/api/city/updateCityDetails/:cityId', updateCityDetails);
    app.delete('/api/city/deleteCityDetails/:cityId', deleteCityDetails);
}