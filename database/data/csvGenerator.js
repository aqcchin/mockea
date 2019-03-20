const faker = require('faker');
const fs = require('fs');

var output;
var hexColor;
var imgColors = [
  "5fa2dd",
  "cc0000",
  "dddddd",
  "ff4444"
];

var designerArr = [
  "Ola Wihlborg",
  "J Jelinek",
  "Carl Öjerstam",
  "David Wahl",
  "A Efverlund"
];

let makeDesigners = () => {
  var i = 0;
  var entries = 10000000;
  var stream = fs.createWriteStream("designersData.csv");

  var id = 'id';
  var designerName = 'designerName';
  var productLine = 'productLine';
  var thoughts = 'thoughts';
  var imageUrl = 'imageUrl';

  stream.write(
    id + ','
    + designerName + ','
    + productLine + ','
    + thoughts + ','
    + imageUrl + '\n'
  );
  
  var write = function() {
    let ok = true;

    do {
      i++;
      
      hexColor = Math.floor(Math.random() * (3 - 0)) + 0;
      designerIndex = Math.floor(Math.random() * (5 - 0)) + 0;
      
      id = i;
      designerName = designerArr[designerIndex];
      productLine = faker.lorem.word();
      thoughts = faker.lorem.sentences();
      imageUrl = `http://dummyimage.com/400x400.png/${imgColors[hexColor]}/ffffff`;

      if (i === entries) {
        output = 
          id + ','
          + designerName + ','
          + productLine + ','
          + thoughts + ','
          + imageUrl + '\n';
        // console.log('if output', output)
        stream.write(output, 'utf8', () => {
          // console.log
        });
      } else {
        output = 
          id + ','
            + designerName + ','
            + productLine + ','
            + thoughts + ','
            + imageUrl + '\n';
        // console.log('else output', output)
        ok = stream.write(output, 'utf8');
      }

      if (i % 1000000 === 0) {
        console.log(i);
      }
    } while (i < entries && ok)

    if (i < entries) {
      stream.once('drain', write);
    }
  }

  write();

  // for (var i = 0; i < 10000000; i++) {
  //   hexColor = Math.floor(Math.random() * (3 - 0)) + 0;
  //   designerIndex = Math.floor(Math.random() * (5 - 0)) + 0;

  //   id = i;
  //   designerName = designerArr[designerIndex];
  //   productLine = faker.lorem.word();
  //   thoughts = faker.lorem.sentences();
  //   imageUrl = `http://dummyimage.com/400x400.png/${imgColors[hexColor]}/ffffff`;

  //   stream.write(
  //     id + ','
  //     + designerName + ','
  //     + productLine + ','
  //     + thoughts + ','
  //     + imageUrl + '\n'
  //   );

  //   if (i % 1000000 === 0) {
  //     console.log(i);
  //   }
  // }
}

let makeProducts = () => {
  var i = 0;
  var entries = 10000000;
  var stream = fs.createWriteStream("productsData.csv");
  var id = 'id';
  var title = 'title';
  var productLine = 'productLine';
  var description = 'description';
  var designerName = 'designerName';
  var price = 'price';
  var stars = 'stars';
  var reviewCount = 'reviewCount';
  var imageUrl = 'imageUrl';

  stream.write(
    id + ','
    + title + ','
    + productLine + ','
    + description + ','
    + designerName + ','
    + price + ','
    + stars + ','
    + reviewCount + ','
    + imageUrl + '\n'
  );

  var write = function() {
    let ok = true;

    do {
      i++;
      
      hexColor = Math.floor(Math.random() * (3 - 0)) + 0;
      designerIndex = Math.floor(Math.random() * (5 - 0)) + 0;
      
      id = i;
      title = faker.lorem.words();
      productLine = faker.lorem.word();
      description = faker.lorem.sentence();
      designerName = designerArr[designerIndex];
      price = Math.floor(Math.random() * (100 - 20)) + 20;
      stars = Number((Math.random() * (5 - 1) + 1).toFixed(1));
      reviewCount = Math.floor(Math.random() * (100 - 0)) + 0;
      imageUrl = `http://dummyimage.com/400x400.png/${imgColors[hexColor]}/ffffff`;

      if (i === entries) {
        output = 
          id + ','
          + title + ','
          + productLine + ','
          + description + ','
          + designerName + ','
          + price + ','
          + stars + ','
          + reviewCount + ','
          + imageUrl + '\n';
        // console.log('if output', output)
        stream.write(output, 'utf8', () => {
          // console.log
        });
      } else {
        output = 
          id + ','
          + title + ','
          + productLine + ','
          + description + ','
          + designerName + ','
          + price + ','
          + stars + ','
          + reviewCount + ','
          + imageUrl + '\n';
        // console.log('else output', output)
        ok = stream.write(output, 'utf8');
      }

      if (i % 1000000 === 0) {
        console.log(i);
      }
    } while (i < entries && ok)

    if (i < entries) {
      stream.once('drain', write);
    }
  }

  write();

  // for (var i = 0; i < 10; i++) {
  //   hexColor = Math.floor(Math.random() * (3 - 0)) + 0;
  //   designerIndex = Math.floor(Math.random() * (5 - 0)) + 0;

  //   title = faker.lorem.words();
  //   productLine = faker.lorem.word();
  //   description = faker.lorem.sentence();
  //   designerName = designerArr[designerIndex];
  //   price = Math.floor(Math.random() * (100 - 20)) + 20;
  //   stars = Number((Math.random() * (5 - 1) + 1).toFixed(1));
  //   reviewCount = Math.floor(Math.random() * (100 - 0)) + 0;
  //   imageUrl = `http://dummyimage.com/400x400.png/${imgColors[hexColor]}/ffffff`;
  // }
}

// Run only one of these at a time
// makeDesigners();
makeProducts();