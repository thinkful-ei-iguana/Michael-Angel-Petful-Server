const {Queue} = require('../Queue');
const {displayQ} = require('../Queue');

let adopters = new Queue();

const adopterData = [
  {name: "Mike"},
  {name: "Angel"},
  {name: "Rox"},
  {name: "Brendan"},
  {name: "Steve"},
  {name:"Marcus"},
  {name:"Richard"},
  {name:"Sam"},
  {name:"Mary"},
  {name:"Anne"}
];

adoptersData.forEach(eachAdopter => {
  adopters.enqueue(eachAdopter);
});

const AdoptersService = {
  getAdopters() {
    const displayAdopters = displayQ(adopters)
    return displayAdopters;
  },
  inlineForAdoption() {
    return adopters.peek();
  },
  addName(name) {
    adopterData.push(name);
    adopters.enqueue(name)
    return displayQ(adopters)
  },
  adopt() {
    adopters.dequeue();
    return displayQ(adopters)
  }
};

module.exports = AdoptersService;