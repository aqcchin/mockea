const { Client, Pool } = require('pg');

// var connection = 'postgres://aqchin@localhost:5432/ikeadb';

var connectionString = {
  user: 'aqchin',
  host: 'localhost',
  database: 'ikeadb',
  password: '',
  port: 5432,
};;

// var client = new Client(connection);
// client.connect();

var pool = new Pool(connectionString);

var query = function(sql, cb) {
  pool.connect((err, client, done) => {
    if (err) {
      console.log('Error acquiring client');
      cb(err);
      done();
    } else {
      client.query(sql, (err, res) => {
        cb(res);
        done();
        if (err) {
          console.error('Error', err);
        } else {
          console.log('Connected to the database');
        }
      });
    }
  });
  
}

module.exports = query;
// module.exports = client;

// ===================================

// var designers = client.query(`
//   CREATE TABLE IF NOT EXISTS "designers" (
//     "id" INTEGER NOT NULL ,
//     "designerName" VARCHAR(255) NOT NULL, 
//     "productLine" VARCHAR(255) NOT NULL, 
//     "thoughts" VARCHAR(255) NOT NULL, 
//     "imageUrl" VARCHAR(255) NOT NULL, 
//     PRIMARY KEY ("id")
//   );
// `);

// var products = client.query(`
//   CREATE TABLE IF NOT EXISTS products (
//     "id" INTEGER NOT NULL , 
//     "title" VARCHAR(255) NOT NULL, 
//     "productLine" VARCHAR(255) NOT NULL, 
//     "description" VARCHAR(255) NOT NULL, 
//     "designerName" VARCHAR(255) NOT NULL, 
//     "price" INTEGER NOT NULL, 
//     "stars" FLOAT NOT NULL, 
//     "reviewCount" INTEGER NOT NULL, 
//     "imageUrl" VARCHAR(255) NOT NULL, 
//     PRIMARY KEY ("id")
//   );
// `);

// ===================================

// const Sequelize = require('sequelize');

// var connection = new Sequelize ('ikeadb', '', '', {
//     host: 'localhost',
//     dialect: 'postgres',
//     port: '5432',
//     // logging: false
//   });
  
  
//   connection.authenticate()
//   .then(() => {
//     console.log('Connected to the database!')
//   })
//   .catch(err => {
//     console.error(err)
//   })
  
//   module.exports = connection;