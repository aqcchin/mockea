// MongoDB database (default)
// const { products, designers } = require('../database/index.js');

// PostgreSQL database
// const { designers, products } = require('../database/postgresql/model.js');
const query = require('../database/postgresql/index.js');

// ===================================
// Products functions
// ===================================

module.exports = {
  getProduct: (req, res) => {
    var ids = '(';

    for(var i = 0; i < 6; i++) {
      if (i === 5) {
        ids += Math.floor(Math.random() * (10000000 - 9000000)) + 9000000 + ')';
      } else {
        ids += Math.floor(Math.random() * (10000000 - 9000000)) + 9000000 + ', ';
      }
    }

    query(`SELECT * FROM products WHERE "id" in ${ids}`, function(data) {
      res.status(200).send(data.rows);
    })

    // ======================================
    
    // var getProducts = db.query(
    //     `SELECT * FROM products WHERE "id" in ${ids}`
    //   )
    //   .then(result => {
    //       // console.log(result)
    //       res.status(200).send(result.rows);
    //     }
    //   )
    //   .catch(err => console.log(err))
    //   .then(() => db.end());

    // ======================================
  
    // console.log('get product');
    // var query = req.query;
    // var ids = [];

    // for(var i = 0; i < 6; i++) {
    //   ids.push( Math.floor(Math.random() * (10000000 - 9000000)) + 9000000);
    // }

    // if (query.productLine) {
      // products.findAll({
      //   // where: query,
      //   where: { id: ids },
      //   limit: 6
      // }).then(data => {
      //   // console.log('Sucessfully fetched product data', data);
      //   res.status(200).send(data);
      // }).catch(err => {
      //   res.status(404).send('Error fetching product');
      // });
    // }

    // ======================================
  
    // var filterType = req.query.type;
    // var filterProductLine = req.query.productLine;

    // if (filterType) {
    //   // Get only products matching this filter type
    // } else if (filterProductLine) {
    //   // Get only products matching this filter type
    // }

    // No filter functionality is implemented currently, so using the below 
    // code to retrieve random entries from the database
    // products.findRandom({}, {}, { limit: 6 }, function (err, results) {
    //   if (err) {
    //     res.status(404).send('Error');
    //   } else {
    //     res.status(200).json(results);
    //   }
    // });
  },

  postProduct: (req, res) => {
    console.log('inside postproduct');
    var newData = req.body.params;

    products.create(newData)
      .then(data =>  {
        console.log('A new product has been created', data);
        res.status(201).send('Success');
      })
      .catch(err => {
        console.log('Error creating product');
        res.status(404).send('Error');
      })
    
  },

  updateProduct: (req, res) => {
    // var newData = req.query;

    // products.update(newData, { where: { id: 1 } })
    //   .then(data => {
    //     console.log('New entry:', data);
    //   })
    //   .catch(err => {
    //     console.log('Error updating data');
    //   })
  },

  deleteProduct: (req, res) => {
    var query = req.query;

    // products.destroy({})
  },


// ===================================
// Designers functions
// ===================================

  getDesigner: (req, res) => {
    var id = Math.floor(Math.random() * (10000000 - 9000000)) + 9000000;

    query(`SELECT * FROM designers WHERE "id" = ${id}`, function(data) {
      res.status(200).send(data.rows);
    });

    // ======================================

    // var query = req.query;
    // // console.log('get designer', query)
    // var id = [ Math.floor(Math.random() * (10000000 - 9000000)) + 9000000 ];

    // if (query.designerName) {
      // designers.findAll({
      //   // where: query,
      //   where: { id: id },
      //   limit: 1
      // }).then(data => {
      //   // console.log('get designer data', data);
      //   res.status(200).send(data);
      // }).catch(err => {
      //   console.log('Error getting product');
      // });
    // }

    // ======================================

    // var productLine = req.query.productLine;
    
    // Implement a db query using the product line above, find the designer who created the product line

    // No filter functionality is implemented currently, so using the below 
    // code to retrieve random entries from the database
    // designers.findRandom({}, {}, { limit: 1 }, function (err, results) {
    //   if (err) {
    //     res.status(404).send('Error');
    //   } else {
    //     res.status(200).json(results);
    //   }
    // });
  },

  postDesigner: (req, res) => {
    console.log('inside postDesigner');
    var newData = req.body.params;

    designers.create(newData)
      .then(data =>  {
        console.log('A new designer has been created', data);
      })
      .catch(err => {
        console.log('Error creating designer');
      })
    res.status(201).send('Success');
    
    // ======================================

    // console.log('inside postdesigner');
    // res.status(200).send('success');
  },
  
  updateDesigner: (req, res) => {
    // var query = req;

    // console.log('in update designers', query);

    // designers.update()
    //   .then()
    //   .catch();

    // res.status(204).send('Success');
  },

  deleteDesigner: (req, res) => {
    // var query = req;
    // console.log('delete', query);
  }
}