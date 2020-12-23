const jwt = require('jsonwebtoken');

module.exports = () => {
    return (req, res, next) => {
        if(req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                if(jwt.verify(token, process.env.SECRET_PHRASE)){
                    next();
                }
            } catch {
                res.status(401).json({message: "token auth failed"})
            }
        } else {
            res.status(401).json({message: "token auth still failed"});
        }
    }
}