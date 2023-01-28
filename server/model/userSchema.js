const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
     name:{
        type:String,
        require:true
     },
     email: {
        type:String,
        require:true
     },
     phone: {
        type:Number,
        require:true
     },
     password: {
        type:String,
        require:true
     },
     cpassword: {
        type:String,
        require:true
     },
     tokens:[
      {
         token: {
            type: String,
            required: true
         }
      }
     ]
})

userSchema.methods.generateAuthToken = async function() {
   try{
let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
this.tokens = this.tokens.concat({token:token});
await this.save();
return token;
   }catch(error){
console.log(error);
   }
}

// Hashing the password
userSchema.pre('save',function(next) {
   if(this.isModified('password')){
this.password = bcrypt.hash(this.password,12);
this.cpassword = bcrypt.hash(this.cpassword,12);
next();
   }
})


const User = mongoose.model('USER',userSchema)

module.exports = User;