import * as userDetailsDao from "../../userDetails/userDetails-dao.js";

const findUser  = async (req, res) => {
    const user = await userDetailsDao.findUser();
    res.json(user);
}

const addUser = async (req, res) => {
    const newUser = req.body;
    const username = newUser.username;
    const userPresent = await userDetailsDao
        .findUserByUsername(username);
    if(userPresent) {
        res.json({status:404, message: "Username already present"});
    } else {
        if (newUser.role === "admin") {
            const admin = await userDetailsDao.findAdmin()
            if (admin) {
                res.json({status: 402, message: "Contact administration to become an admin"});
            } else {
                const insertedUser = await userDetailsDao
                    .createUser(newUser);
                res.json({status: 200, user: insertedUser, message: "Successfully Registered"});
            }
        } else {
            const insertedUser = await userDetailsDao
                .createUser(newUser);
            res.json({status: 200, user: insertedUser, message: "Successfully Registered"});
        }
    }
}
const logout = async (req, res) => {
    // currentUser = null;
    // req.session.destroy();
    res.sendStatus(200);
};
const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.userId;
    const updates = req.body;
    console.log("user id",userIdToUpdate);
    console.log("updates",updates);
    const status = await userDetailsDao
        .updateUser(userIdToUpdate,
            updates);
    res.json({ ...updates, _id: userIdToUpdate } );

}
const deleteUser = async (req, res) => {
    const deleteUser = req.params.userId;
    const status = await userDetailsDao
        .deleteUser(deleteUser);
    res.json(status);
}

const findUserById  = async (req, res) => {
    const userId = req.params.userId;
    const userDetails = await userDetailsDao.findUserById(userId);
    res.json(userDetails);
}

const checkUsername = async (req, res) => {
    const user = req.body.username;
    console.log(user);
    const username = await userDetailsDao
        .findUserByUsername(user);
    if(username) {
        res.json({status:200, message:"Found"});
    } else {
        res.json({status:404,message:"Not Found"});
    }
}

const checkLoginCredentials = async (req, res) => {
    const userName = req.body.username;
    const password = req.body.password;
    const user = await userDetailsDao
        .findUserByUsername(userName);
    if(user) {
        if(password === user.password) {
            res.json({status:200, message:user});
        } else {
            res.json({status:404,message:"Password Incorrect"});
        }
    } else {
        res.json({status:404,message:"Username or Password Incorrect"});
    }

}

export default (app) => {
    app.get('/api/user/getUser', findUser);
    app.post('/api/user/checkUsername', checkUsername);
    app.post('/api/user/checkLoginCredentials',checkLoginCredentials);
    app.get('/api/user/getUser/:userId',findUserById);
    app.post("/api/user/logout", logout);
    app.post('/api/user/addUser',addUser);
    app.put('/api/user/updateUser/:userId',updateUser);
    app.delete('/api/user/deleteUser/:userId',deleteUser);
}
