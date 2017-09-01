window.setTimeout(function () {
  alert('HAMMER TIME!');
}, 5000);

// Timeout  Closure

function hammerTime (time) {
  window.setTimeout(function () {
    alert(`${time} is HAMMER TIME!`);
  });
}

// tea and biscuits

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// line for line was in hw reading too, might be worth memorizing^^

function teaAndBiscuits () {
  reader.question('tryna sip that home brew?', function (res) {
    console.log(`yo hoe ass said ${res}?`);
    reader.question('you bout dem bizzy kits?', function (res2) {
      console.log(`you better say ${res2} wit some emphasis next time.`);

      const first = (res === 'yes') ? 'be' : 'ain\'t';
      const second = (res2 === 'yes') ? 'def' : 'ain\'t';

      console.log(`so ya fa sho ${first} bout that sizzurp and you ${second} tryna hit dem bizzy kits. Coo.`);
      reader.close();
    });
  });
}

// Ways to call a function

function Cat () {
  this.name = 'chester';
  this.age = 17;
}

function Dog () {
  this.name = 'doggo';
  this.age = 17;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const chester = new Cat ();
const doggo = new Dog ();

// Method style

Noodles.chase(chester);

Noodles.chase.call(chester, doggo);
Noodles.chase.apply(chester, [doggo]);
