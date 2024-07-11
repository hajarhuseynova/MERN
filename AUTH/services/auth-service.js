const baseService = require("../services/base-service");
const bcyrpt = require('bcrypt');

async function signUp(model) {
    console.log(`signUp : ${model}`);
    const saltRounds = 10;
    const saltKey = await bcyrpt.genSalt(saltRounds);
    model.password = await bcyrpt.hash(model.password, saltKey);

    const data = await baseService.signUp("users", model);
    return data;
};

async function verifyUser(user) {
    const myAllUsers = await baseService.getAllJsonData()
    const existingUser = myAllUsers.users.find(x => x.username === user.username);
    if (existingUser === undefined){
        return new Error("user not FOUND");
    }
    const passwordVerifyResult = await bcyrpt.compare(user.password, existingUser.password)
    if (!passwordVerifyResult){
        return new Error(" WRONG password ");
    }
    if (!existingUser.isActive){
        return new Error("BLOCKED user ");
    }
    return existingUser;
};

module.exports = { signUp, verifyUser };