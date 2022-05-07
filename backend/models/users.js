const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose);

const userSchema = new Schema({
  'user_id': {type: Number, unique: true},
  'name': {type: String},
  'email': {type: String},
  'password': {type: String, unique: true},
  'date': {type: Date, default: Date.now}
}, {collection: 'Users'});

userSchema.plugin(uniqueValidator);

const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;