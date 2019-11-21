const mongoose=require ('mongoose');

const UserSchema=new mongoose.Schema({
    numero:{type:String,require:true},
    pseudo:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    online:{type:Boolean,default:false}
});

module.exports=mongoose.model('user',UserSchema)