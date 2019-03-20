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
  var stream = fs.createWriteStream("designersData.json");
  var obj = {
    designerName: '',
    productLine: '',
    thoughts: '',
    imageUrl: ''
  };

  for (var i = 0; i < 10; i++) {
    hexColor = Math.floor(Math.random() * (3 - 0)) + 0;
    designerIndex = Math.floor(Math.random() * (5 - 0)) + 0;
    
    obj.designerName = designerArr[designerIndex];
    obj.productLine = faker.lorem.word();
    obj.thoughts = faker.lorem.sentences();
    obj.imageUrl = `http://dummyimage.com/400x400.png/${imgColors[hexColor]}/ffffff`;
    
    output = JSON.stringify(obj, null, 2) + '\n'; 
    stream.write(output);

    if (i % 1000000 === 0) {
      console.log(i);
    }
  }
  
  console.log("File has been saved");
};


let makeProducts = () => { 
  var output;
  var stream = fs.createWriteStream("productsData.json");
  var obj = {
    title: '',
    productLine: '',
    description: '',
    designerName: '',
    price: null,
    stars: null,
    reviewCount: null,
    imageUrl: ''
  };

  for (var i = 0; i < 10; i++) {
    hexColor = Math.floor(Math.random() * (3 - 0)) + 0;
    designerIndex = Math.floor(Math.random() * (5 - 0)) + 0;

    obj.title = faker.lorem.words();
    obj.productLine = faker.lorem.word();
    obj.description = faker.lorem.sentence();
    obj.designerName = designerArr[designerIndex];
    obj.price = Math.floor(Math.random() * (100 - 20)) + 20;
    obj.stars = Number((Math.random() * (5 - 1) + 1).toFixed(1));
    obj.reviewCount = Math.floor(Math.random() * (100 - 0)) + 0;
    obj.imageUrl = `http://dummyimage.com/400x400.png/${imgColors[hexColor]}/ffffff`;

    output = JSON.stringify(obj, null, 2) + '\n';
    stream.write(output);

    if (i % 1000000 === 0) {
      console.log(i);
    }
  }

  console.log("File has been saved");
};

// Run only one of these at a time
// makeDesigners();
// makeProducts();
