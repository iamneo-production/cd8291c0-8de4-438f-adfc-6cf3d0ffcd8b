const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

exports.signup = (req,res) => {

    console.log(req.body)
const { firstname,lastname, email, password } = req.body;
      
    if(!firstname || !lastname  || !email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json({msg: 'User already exists'});

        const newUser = new User({ firstname,lastname, email, password });
        
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        jwt.sign(
                            { id: user._id },
                            config.get('jwtsecret'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user._id,
                                        name: user.name,
                                        email: user.email
                                    }
                                });
                            }
                        )
                    });
            })
        })

         
   })
  console.log(req.body) 
}



module.exports.login = async (req,res) => {
    console.log("this is email",req.query.email)
    const email = req.query.email;
    const password = req.query.password;
    
    console.log("email is",email);
    console.log(password);
    try {
        // Retrieve the user from the database
        const user = await User.findOne({ email: email });
       // console.log(user.password);
        // Compare the hashed password in the database with the password provided by the user
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (isMatch) {
          // If passwords match, send a success response to the client
          res.status(200).send({ message: 'Authentication successful' });
        } else {
          // If passwords do not match, send an error response to the client
          res.status(401).send({ message: 'Authentication failed' });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error' });
      }
}


module.exports.get_user = (req,res) => {
    User.findById(req.user.email)
        .select('-password')
        .then(user => res.json(user));

 }