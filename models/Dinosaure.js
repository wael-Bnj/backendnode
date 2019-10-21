const mongoose =require('mongoose');

const DinosaureSchema =mongoose.Schema({

age:{
     type:String,
     required:true
 },
 famille :{
     type:String,
     required:true
 },

 race :{
    type:String,
    required:true
},
nourriture :{
    type:String,
    required:true
}
});
const Dinosaure=module.exports=mongoose.model('Dinosaure',DinosaureSchema);
