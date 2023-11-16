const mongoose = require('mongoose');
const UserSchema2 = mongoose.Schema({
    cni:{
        type: String,
        require:true
    },
    noms:{
        type: String,
        require:true
    },
    ville:{
        type: String,
        require:true
    },
    statut:{
        type: String,
    },
    details:{
        type: String,
    }
})
//Pour recuperer mon model cree plus haut
let Users2 = mongoose.model('users2', UserSchema2)
module.exports = Users2