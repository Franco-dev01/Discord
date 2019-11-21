const mongoose= require('mongoose');
const connexion=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/discord',{
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true})
            console.log('connected to mogodb');
    }catch(err) {
        console.log(err);
    }
}

module.exports=connexion;