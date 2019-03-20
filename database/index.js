const mongoose = require('mongoose');
var random = require('mongoose-simple-random');

// mongoose.connect('mongodb://mongo:27017/IkeaDB', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/IkeaDB', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to DB!');
});


var productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  productLine: { type: String, required: true },
  description: { type: String, required: true },
  desginerName: { type: String, required: true },
  price: { type: Number, required: true },
  itemCount: { type: Number, required: true },
  stars: { type: Number, required: true },
  reviewCount: { type: Number, required: true },
  imageUrl: { type: String, required: true },

  // *******************************************************
  // Coordinating products should be an array that holds the 
  // Ids of the products this current entry needs

  // For example, if this entry was for a lamp, the
  // coordinating products would include the ID for a lightbulb
  // or extension cord
  // *******************************************************

  coodinatingProducts: { type: Array }
});

productSchema.plugin(random);
var products = mongoose.model('products', productSchema);

var desginersSchema = new mongoose.Schema({
  desginerName: { type: String, required: true },
  productLine: { type: String, required: true },
  thoughts: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

desginersSchema.plugin(random);
var designers = mongoose.model('designers', desginersSchema);

module.exports = { products, designers };