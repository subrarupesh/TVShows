const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose);

const showSchema = new Schema({
  'name': {type: String},
  'user_id': {type: String},
  'cast': {type: Array},
  'crew': {type: Array},
  'description': {type: String},
  'status': {type: Boolean, default: false},
  'date': {type: Date, default: Date.now}
}, {collection: 'Shows'});

showSchema.plugin(uniqueValidator);

const showModel = mongoose.model('Shows', showSchema);
module.exports = showModel;