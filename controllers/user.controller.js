const User = require('../models/user.model');
exports.userQueries=class{
    static setUser(data){
        return new Promise(async,(next)=>{
            const user = new User({
                number:data.number,
                pseudo:data.pseudo,
                email:data.email,
                password:data.password
            })
            console.log(user);
            user.save().then((user)=>{
                next({
                    user:user,
                })
            }).catch((err)=>{
                next({etat:false,erreur:err})
            })

        })
    }
}
