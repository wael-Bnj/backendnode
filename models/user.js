const mongoose =require('mongoose');

const UserSchema =mongoose.Schema({

 login :{
    type:String,
    required:true
},
 mot  :{
    type:String,
    required:true
}
});
const User=module.exports=mongoose.model('User',UserSchema);
