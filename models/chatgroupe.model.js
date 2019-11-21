const mongoose=require ('mongoose');
const express =require ('express');

const chatGroup=new mongoose.Schema({
    message:[{
        video:{type:string},
        audio:{type:string},
        image:{type:string},
        text:{type:string},
        user_id:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
        date_pub:{type:date,default:date.now}
   }]

});

module.exports=mongoose.model('chatGroup,chatSchema')