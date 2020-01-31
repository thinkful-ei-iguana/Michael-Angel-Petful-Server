const {Queue} = require('../Queue');
const {displayQ} = require('../Queue');

let cats = new Queue();

let catStore = [

  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Cedrick',
    sex: 'Male',
    age: 3,
    breed: 'British Short Hair',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Ruby',
    sex: 'Female',
    age: 8,
    breed: 'Persian',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Phil',
    sex: 'Male',
    age: 8,
    breed: 'Siamese',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Marcy',
    sex: 'Female',
    age: 2,
    breed: 'Russian Blue',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Marcus',
    sex: 'Male',
    age: 2,
    breed: 'Sphynx',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Chubz',
    sex: 'Male',
    age: 8,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'CeeCee',
    sex: 'Female',
    age: 3,
    breed: 'British Short Hair',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Bash',
    sex: 'Male',
    age: 1,
    breed: 'Persian',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Phyllis',
    sex: 'Female',
    age: 9,
    breed: 'Siamese',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Champ',
    sex: 'Male',
    age: 5,
    breed: 'Russian Blue',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Siri',
    sex: 'Female',
    age: 7,
    breed: 'Sphynx',
    story: 'Thrown on the street',
    adopted: false
  },
];

catStore.forEach(eachCat => {
  cats.enqueue(eachCat)
});

const CatsService = {
  getCats() {
    const displayCats = displayQ(cats);
    return displayCats;
  },
  adoptCat() {
    const aC = cats.dequeue();
    aC.adoped = true;
    cats.enqueue(aC);
    return displayQ(cats);
  }
};

module.exports = CatsService;
