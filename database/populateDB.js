var designersData = require('./designersData.json');
var productData = require('./productsData.json');
const { products, designers } = require('../database/index.js');



products.collection.insertMany(productData, function (err, data) {
  if (err) {
    console.log('Error saving data')
  } else {
    console.log('Successfully saved to database')
  }
});

designers.collection.insertMany(designersData, function (err, data) {
  if (err) {
    console.log('Error saving data')
  } else {
    console.log('Successfully saved to database')
  }
});
