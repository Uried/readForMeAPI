const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    nom:{
        require:true,
        type:String,
    },
    age:{
        type: Number,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    csp:{
        type:String
    },
    photo:{
        type:String,
        default: 'tfutudeypewpfg'
    }

}
);

let Users = mongoose.model('Users', UserSchema )
module.exports = Users;