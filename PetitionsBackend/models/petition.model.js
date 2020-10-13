const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petitionSchema = new Schema({
    title: {type: String},
    description: {type: String},
    category: {type: String},
    audience: {type: String},
    mediaUrl: {type: String},
    signatories: {type: Array},
});

const Petition = mongoose.model('Petition', petitionSchema);

module.exports = Petition;