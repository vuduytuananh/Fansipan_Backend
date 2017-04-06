
module.exports = {
  atrributes:{
    user: {
      type: "string",
      required: true,
      unique: true
    },
    name: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true,
      unique: true
    },
    password: {
      type: "string",
      required: true
    }
  },
  beforeValidate: function(manager, cb){
    //validate password
    cb();
  },
  beforeCreate: function(manager, cb){
    //hash password
    HashPasswordService(manager.password, function(err, hash){
      if(err) return cb(err);
      manager.password = hash;
      return cb();
    })
  }
}
