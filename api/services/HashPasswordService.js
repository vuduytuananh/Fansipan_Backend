var bcrypt = require("bcrypt");
module.exports = function(password, cb){
  bcrypt.genSalt(10, function(err, salt){
    if(err) return cb(err);
    bcrypt.hash(password, salt, cb(err, hash));
  })
}
