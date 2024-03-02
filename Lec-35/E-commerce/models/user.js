const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    wishList:[{
        type: mongoose.Types.ObjectId,
        ref:'Product'
    }]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);
module.exports = User;
