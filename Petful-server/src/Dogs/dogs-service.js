const {Queue} = require('../Queue');
const {displayQ} = require('../Queue');

let dogs = new Queue();

let dogStore = [

  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Nala',
    sex: 'Female',
    age: 6,
    breed: 'Siberian Husky',
    story: 'Owner Passed',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Male',
    age: 1,
    breed: 'Pomeranian',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Butch',
    sex: 'Male',
    age: 5,
    breed: 'Pug',
    story: 'Found in a dumpster',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Pete',
    sex: 'Male',
    age: 5,
    breed: 'American Pitbull',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Goku',
    sex: 'Male',
    age: 4,
    breed: 'Siberian Husky',
    story: 'Found in park',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Dash',
    sex: 'Female',
    age: 4,
    breed: 'Pomeranian',
    story: 'Owner couldnt afford to take care of her',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Skeeter',
    sex: 'Male',
    age: 3,
    breed: 'Pug',
    story: 'Owner Passed',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Martha',
    sex: 'Female',
    age: 9,
    breed: 'American Pitbull',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Flipper',
    sex: 'Male',
    age: 5,
    breed: 'Pomeranian',
    story: 'Owner Passed',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Buck',
    sex: 'Male',
    age: 5,
    breed: 'Pug',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Sirius',
    sex: 'Male',
    age: 1,
    breed: 'American Pitbull',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fudge',
    sex: 'Male',
    age: 5,
    breed: 'Siberian Husky',
    story: 'Owner could no longer afford to take care of him',
    adopted: false
  }
];

dogStore.forEach(eachDog => {
  dogs.enqueue(eachDog);
});

const DogsService = {
  getDogs() {
    const displayDogs = displayQ(dogs);
    return displayDogs;
  },
  inlineForAdoption() {
    return dogs.peek();
  },
  adoptDog() {
    const aD = dogs.dequeue();
    aD.adopted = true;
    dogs.enqueue(aD)
    return displayQ(dogs);
  }
};

module.exports = DogsService;