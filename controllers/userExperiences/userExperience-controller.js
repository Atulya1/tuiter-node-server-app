
import * as userExperienceDao from "../../userExperience/userExperience-dao.js";

const findUserExperience  = async (req, res) => {
    const userExperience = await userExperienceDao.findUserExperience();
    res.json(userExperience);
}

const addUserExperience = async (req, res) => {
    const newUserExperience = req.body;
    console.log(newUserExperience);
    const insertedUserExperience = await userExperienceDao
        .createUserExperience(newUserExperience);
    res.json(insertedUserExperience);
}

const updateUserExperience = async (req, res) => {
    const userExperienceIdToUpdate = req.params.userExperienceId;
    const updates = req.body;
    const status = await userExperienceDao
        .updateUserExperience(userExperienceIdToUpdate,
            updates);
    res.json(status);

}
const deleteUserExperience = async (req, res) => {
    const deleteUserExperiences = req.params.userExperienceId;
    const status = await userExperienceDao
        .deleteUserExperience(deleteUserExperiences);
    res.json(status);
}

const findUserExperienceById  = async (req, res) => {
    const userExperienceId = req.params.userExperienceId;
    console.log(userExperienceId);
    const userExperienceDetails = await userExperienceDao.findUserExperienceById(userExperienceId)
    res.json(userExperienceDetails);
}
export default (app) => {
    app.get('/api/user/getUserExperience', findUserExperience);
    app.get('/api/user/getUserExperience/:userExperienceId',findUserExperienceById);
    app.post('/api/user/addUserExperience',addUserExperience);
    app.put('/api/user/updateUserExperience/:userExperienceId',updateUserExperience);
    app.delete('/api/user/deleteUserExperience/:userExperienceId',deleteUserExperience);
}