const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS'){
    return next()
  }

  try {
    const token = req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1];

    if(!token){
      return res.status(401).json({message: 'Error in authorization'})
    }

    const userData = jwt.verify(token, config.get('jwtSecret'));

    req.user = userData;
    next();
  } catch (e) {
    return res.status(401).json({message: `Error in authorization ${e.message}`})
  }
}
