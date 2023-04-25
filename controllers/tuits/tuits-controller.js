import * as tuitsDao from '../../tuits/tuits-dao.js'
import axios from 'axios';

const createTuit = async (req, res) => {
    const newTuit = req.body;
    console.log(newTuit);
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);

}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export const getPhotoReferences = async (place_id) => {
    const response = (await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=AIzaSyDD0GxnUVXCqw-diJgj35DY_uOOVb8HJBE`));
    const photoReferences = [];
    if(response.data.result.photos) {
        response.data.result.photos.forEach(function (photo) {
            var ref = photo.photo_reference;
            photoReferences.push(ref);
        });
    }
    let URL = "";
    if(response.data.result.url) {
        URL = response.data.result.url;
    }
    //console.log(photoReferences);
    return ({photoReferences: photoReferences, url: URL});
};

export const getPhotos = async (req, res) => {
    const place_id = req.params.place_id;
    const photos = await getPhotoReferences(place_id);
    const images = [];
    const url = photos.url;
    for (const photo of (photos).photoReferences) {
        const response = (await axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photo_reference=${photo}&key=AIzaSyDD0GxnUVXCqw-diJgj35DY_uOOVb8HJBE`));
        images.push(response.config.url);
    }
    res.json({images: images, url: url});
};

export const getSomething = async (req, res) => {
    const place_id = req.params.place_id;
    console.log(place_id);
    res.json(JSON.stringify(place_id));
};

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.get('/api/tuits/getPhotos/:place_id', getPhotos);
    app.get('/api/tuits/getSomething/:place_id', getSomething);
}
