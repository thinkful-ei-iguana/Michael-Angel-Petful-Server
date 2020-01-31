const {Queue} = require('../Queue');
const {displayQ} = require('../Queue');

let dogs = new Queue();

let dogStore = [

  {
    imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/81a2e35/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa9%2Ff54ad0a80611e0a0d50050568d634f%2Ffile%2FSiberian-Husky-4-645mk062811.jpg', 
    imageDescription: 'Nala the Husky',
    name: 'Nala',
    sex: 'Female',
    age: 6,
    breed: 'Siberian Husky',
    story: 'Owner Passed',
    adopted: false
  },
  {
    imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/edb51df/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F19%2F716f20a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-2-645mk062811.jpg', 
    imageDescription: 'Fluffy the pomeranian.',
    name: 'Fluffy',
    sex: 'Male',
    age: 1,
    breed: 'Pomeranian',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/9d51a10/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F24%2F697af0a7fa11e0a0d50050568d634f%2Ffile%2FPug-2-645mk062811.jpg', 
    imageDescription: 'Butch the pug.',
    name: 'Butch',
    sex: 'Male',
    age: 5,
    breed: 'Pug',
    story: 'Found in a dumpster',
    adopted: false
  },
  {
    imageURL:'https://upload.wikimedia.org/wikipedia/commons/b/b1/American_Pitbull_Terrier_-_Colby_Line.jpg', 
    imageDescription: 'Pete the pitbull.',
    name: 'Pete',
    sex: 'Male',
    age: 5,
    breed: 'American Pitbull',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://modeltheme.com/mt_numbat/wp-content/uploads/2017/06/Siberian-Husky-600x600.jpg', 
    imageDescription: 'Goku the Husky.',
    name: 'Goku',
    sex: 'Male',
    age: 4,
    breed: 'Siberian Husky',
    story: 'Found in park',
    adopted: false
  },
  {
    imageURL:'https://hdliveextra-a.akamaihd.net/HD/image_sports/mobile/nbc_dogshow_toy_pomeranian_v2_191121_640x360.jpg', 
    imageDescription: 'Dash the pomeranian.',
    name: 'Dash',
    sex: 'Female',
    age: 4,
    breed: 'Pomeranian',
    story: 'Owner couldnt afford to take care of her',
    adopted: false
  },
  {
    imageURL:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 
    imageDescription: 'Skeeter the pug.',
    name: 'Skeeter',
    sex: 'Male',
    age: 3,
    breed: 'Pug',
    story: 'Owner Passed',
    adopted: false
  },
  {
    imageURL:'https://canineperspectivechicago.com/wp-content/uploads/2018/08/American-Pit-Bull-Terrier-1.jpg', 
    imageDescription: 'Martha the pitbull.',
    name: 'Martha',
    sex: 'Female',
    age: 9,
    breed: 'American Pitbull',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://i.barkpost.com/wp-content/uploads/2019/08/pomeranian-featured-image-.jpg?q=70&fit=crop&crop=entropy&w=808&h=500', 
    imageDescription: 'Flipper the pomeranian.',
    name: 'Flipper',
    sex: 'Male',
    age: 5,
    breed: 'Pomeranian',
    story: 'Owner Passed',
    adopted: false
  },
  {
    imageURL:'https://static01.nyt.com/images/2019/03/01/world/01germany-pug/merlin_151392645_ade83440-28f1-4faa-b26f-50a26699c6b5-articleLarge.jpg?quality=75&auto=webp&disable=upscale', 
    imageDescription: 'Buck the pug.',
    name: 'Buck',
    sex: 'Male',
    age: 5,
    breed: 'Pug',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQxNQfYmOC16rIS5Zxx8duRhrIuyBcrW-JZXjOWlgbsqb1L12Zg&s', 
    imageDescription: 'Sirius the pitbull.',
    name: 'Sirius',
    sex: 'Male',
    age: 1,
    breed: 'American Pitbull',
    story: 'Found on the street',
    adopted: false
  },
  {
    imageURL:'https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg', 
    imageDescription: 'Fudge the Husky.',
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