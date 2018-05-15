var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var itemsSchema = mongoose.Schema({
    content: {type: String, required: true},
    creation: Date
});
var Item = mongoose.model('Item', itemsSchema);

module.exports = Item;