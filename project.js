// Project Mixed Messages (Codecademy)

// For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.

const rand1 = ["life", "friend", "bartender"];
const rand2 = ["lemon", "orange", "strawberry"];
const rand3 = ["cake", "juice", "smoothie"];

const randomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

const randomMsg = (one, two, three) => {
  return `If ${randomItem(one)} gives you ${randomItem(two)} make ${randomItem(
    three
  )}!`;
};

console.log(randomMsg(rand1, rand2, rand3));
console.log(randomMsg(rand1, rand2, rand3));
console.log(randomMsg(rand1, rand2, rand3));
