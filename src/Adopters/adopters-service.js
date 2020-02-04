const {Queue} = require('../Queue');
const {displayQ} = require('../Queue');

let adopters = new Queue();

const adopterData = [
  {
    name: 'Mike',
    adopting: false
  },
  {
    name: 'Angel',
    adopting: false
  },
  {
    name: 'Rox',
    adopting: false
  },
  {
    name: 'Brendan',
    adopting: false
  },
  {
    name: 'Steve',
    adopting: false
  },
  {
    name: 'Marcus', 
    adopting: false
  },
  {
    name: 'Richard',
    adopting: false
  },
  {
    name: 'Sam', 
    adopting: false
  },
  {
    name: 'Mary', 
    adopting: false
  },
  { 
    name: 'Anne', 
    adopting: false
  }
];

adopterData.forEach(eachAdopter => {
  adopters.enqueue(eachAdopter);
});

const AdoptersService = {
  setInterval() {

  },
  getAdopters() {
    const displayAdopters = displayQ(adopters);
    return displayAdopters;
  },
  inlineForAdoption() {
    return adopters.peek();
  },
  addName(name) {
    adopterData.push(name);
    adopters.enqueue(name);
    return displayQ(adopters);
  },
  adopt() {
    adopters.dequeue();
    return displayQ(adopters);
  }
};

module.exports = AdoptersService;