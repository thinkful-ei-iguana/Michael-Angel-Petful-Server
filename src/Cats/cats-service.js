const {Queue} = require('../Queue');
const {displayQ} = require('../Queue');

let cats = new Queue();

let catStore = [

  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Fluffy the bengal.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://i.pinimg.com/originals/a8/89/48/a8894847467aadbf5511f4ba4c6fea9f.jpg', 
    imageDescription: 'Cedrick the British Short Hair.',
    name: 'Cedrick',
    sex: 'Male',
    age: 3,
    breed: 'British Short Hair',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/c759deb/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa8%2F0a%2Fec3909ff44aaaffa64bfc771d828%2FPersian-AP-YAIRFN-645sm3614.jpg', 
    imageDescription: ' Ruby the Persian cat.',
    name: 'Ruby',
    sex: 'Female',
    age: 8,
    breed: 'Persian',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://d3eh3svpl1busq.cloudfront.net/mwIJloVUffDtKiCgRcivopdgojcJrVwT/assets/static/optimized/rev-dbf3d6b/image/siamese-cat-cover.jpg', 
    imageDescription: 'Phil the Siamese Cat.',
    name: 'Phil',
    sex: 'Male',
    age: 8,
    breed: 'Siamese',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://www.thesprucepets.com/thmb/ZpBx4mU_VY6z7xVuQkPh8qb_3vE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/cute-russian-blue-cat-sitting-on-the-bed--female-cat--498731394-5c2a695746e0fb00015354ac.jpg', 
    imageDescription: 'Marcy the Russian Blue cat.',
    name: 'Marcy',
    sex: 'Female',
    age: 2,
    breed: 'Russian Blue',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/A_Sphynx_cat.jpg/220px-A_Sphynx_cat.jpg', 
    imageDescription: 'Marcus the sphynx.',
    name: 'Marcus',
    sex: 'Male',
    age: 2,
    breed: 'Sphynx',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://i.pinimg.com/originals/0f/7c/27/0f7c27f1c593f22134f30bb11ad50144.jpg', 
    imageDescription: ' Chubz the Bengal.',
    name: 'Chubz',
    sex: 'Male',
    age: 8,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://www.thesprucepets.com/thmb/xNnO6wEgYaHuc0NgPMCl8yL8PxA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/BlueBritishShorthairwithGoldEyes-4734bd8247b04451b6da1994a3f62ae7.jpg', 
    imageDescription: 'CeeCee the British Short Hair.',
    name: 'CeeCee',
    sex: 'Female',
    age: 3,
    breed: 'British Short Hair',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://vetstreet-brightspot.s3.amazonaws.com/f7/3b/a9263b9846c7a943e56b9c10f099/Persian-AP-0IUWP7-645sm3614.jpg', 
    imageDescription: 'Bash the Persian Cat.',
    name: 'Bash',
    sex: 'Male',
    age: 1,
    breed: 'Persian',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://www.thesprucepets.com/thmb/agpvZCk-O_o-zUILhO-D2k1s7Dk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/37868147_243349996310794_540614542934147072_n-5b69b2b046e0fb0050630e3d.jpg', 
    imageDescription: 'Phyllis the Siamese Cat.',
    name: 'Phyllis',
    sex: 'Female',
    age: 9,
    breed: 'Siamese',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://azure.wgp-cdn.co.uk/app-yourcat/posts/russian_blue1.jpg?&width=1200&height=630&mode=crop', 
    imageDescription: 'Champ the Russian Blue cat.',
    name: 'Champ',
    sex: 'Male',
    age: 5,
    breed: 'Russian Blue',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://www.prestigeanimalhospital.com/sites/default/files/styles/large/adaptive-image/public/sphynx-cat-breed-info.jpg?itok=cn-84l5R', 
    imageDescription: 'Siri the sphynx.',
    name: 'Siri',
    sex: 'Female',
    age: 7,
    breed: 'Sphynx',
    story: 'Thrown on the street',
    adopted: false
  },
];

catStore.forEach(eachCat => {
  cats.enqueue(eachCat);
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
