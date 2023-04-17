import * as userDetailsDao from "../../userDetails/userDetails-dao.js";
import axios from "axios";
import * as tuitsDao from "../../tuits/tuits-dao.js";

const findUser  = async (req, res) => {
    const user = await userDetailsDao.findUser();
    res.json(user);
}

const addUser = async (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    const insertedUser = await userDetailsDao
        .createUser(newUser);
    res.json(insertedUser);
}

const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.userId;
    const updates = req.body;
    const status = await userDetailsDao
        .updateUser(userIdToUpdate,
            updates);
    res.json(status);

}
const deleteUser = async (req, res) => {
    const deleteUser = req.params.userId;
    const status = await userDetailsDao
        .deleteUser(deleteUser);
    res.json(status);
}

const findUserById  = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const userDetails = await userDetailsDao.findUserById(userId)
    res.json(userDetails);
}
export default (app) => {
    app.get('/api/user/getUser', findUser);
    app.get('/api/user/getUser/:userId',findUserById);
    app.post('/api/user/addUser',addUser);
    app.put('/api/user/updateUser/:userId',updateUser);
    app.delete('/api/user/deleteUser/:userId',deleteUser);
}