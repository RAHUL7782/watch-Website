const bcrypt = require('bcryptjs'); // Corrected bcrypt spelling
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModels");
// const keys = require("./config/keys");
const keys = "yash123";

const userSave = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new userModel({
        username,
        email,
        password
    });

    bcrypt.genSalt(10, (err, salt) => { // Corrected the arrow function syntax
        bcrypt.hash(newUser.password, salt, (err, hash) => { // Corrected the arrow function syntax
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user => res.json(user)) // Corrected res.join to res.json
                .catch(err => console.log(err));
        })
    });
}


const userlogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
// console.log(email)
userModel.findOne({email}).then((user) => {
        if (!user) {
            return res.status(404).json({emailnotfound: 'Email not found'});
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    username: user.username,
                };
                jwt.sign(payload, keys, {expiresIn: 31556926}, (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            }
        });
    });
};




module.exports = {
    userSave,
    userlogin
}
