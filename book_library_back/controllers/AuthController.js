
const User = require('../models/user')
const createError = require('http-errors')
const jwt = require('jsonwebtoken') 
const { body } = require('express-validator/check')
const { validationResult } = require('express-validator/check');


exports.validate = (method) => {
  switch (method) {
    case 'Register': {
     return [ 
        body('username', 'userName doesn't exists').exists(),
        body('password').isLength({ min: 5 })
  
       ]   
    }
  }
}


exports.CurrentUser = (req, res) => {
    user = User.findOne({_id: req.user})
    res.json(user)
}



exports.Register = async (req, res) => {
    try {

      const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }
        const {username, password} = req.body 
        if (!username  || !password) throw createError.BadRequest()
        const doesExist = await User.findOne({username: username});
        if (doesExist) throw createError.Conflict(`${username} is already existing`)

        const user = new User({username, password})
        const savedUser = await user.save()
        res.json({
            "success": "user created"
        })
        
    } catch(error){
        res.json(error)
    }

}

exports.Login = async (req, res) => {
 
    try {
        const {username, password} = req.body
        
        if (!username  || !password) throw createError.BadRequest()
        const doesExist = await User.findOne({username: username});
        if (!doesExist){
            res.createError(401, `${username} or ${password} incorrect`);
        }else {
            const user = new User({username, password})
            user.save()
            
            const token = jwt.sign({user}, process.env.TOKEN_SECRET,{expiresIn:'24h'},(err, token) => {
                res.json({
                    user,
                    token
                })
            })         
        }   
    } catch(error){
        res.json(error)
    }

}


