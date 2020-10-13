const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{type: String, required: true,},
    lastname: {type: String, required: true},
    email:{type: String,},
    password: {type: String},
    aboutMe: {type: String},
    streetAddress: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    phoneNumber: {type: String},
    organizationName: {type: String},
    petitionsCreated: {type: Array},
    petitionsSigned: {type: Array},
    dateCreated: {type: Date}
});

const User = mongoose.model('User', userSchema);

module.exports = User;