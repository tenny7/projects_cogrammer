const jwt = require('jsonwebtoken')
const createError = require('http-errors')

function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];

    try {
        if(typeof bearerHeader != 'undefined'){
            const bearer =  bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken;
            
            const verified = jwt.verify(req.token, process.env.TOKEN_SECRET);
            req.user = verified
            next();
        } else {
            res.status(403).json('invalid token')     
        }

    }catch(error) {
        res.status(403).json('invalid token')
    }
    
}

module.exports = verifyToken