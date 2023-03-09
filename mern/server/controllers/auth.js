const User = require('../models/User');
//const jwt = require('jsonwebtoken');
//const config = require('config');
//const bcrypt = require('bcrypt');

module.exports.signup = (req,res) => {
    const { firstname,lastname,username, email, password } = req.body;

    if(!firstname || !lastname || !username || !email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json({msg: 'User already exists'});

        const newUser = new User({ firstname,lastname,username, email, password });

         
    })
}

module.exports.login = async (req,res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }
    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User does not exist'});

            
        })
}

// module.exports.get_user = (req,res) => {
//     User.findById(req.user.id)
//         .select('-password')
//         .then(user => res.json(user));
// }