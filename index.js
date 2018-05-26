<<<<<<< HEAD
const app = "I don't do much.";

=======
>>>>>>> 71edb03f49e8516cfc09d5ebcbc5ebd2b8b4bc77
var kittens = [
  'Milo', 
  'Otis', 
  'Garfield'
  ];
  
<<<<<<< HEAD
 function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}  


function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}













 
  
  
  
  
=======
  kittens.appendKitten('Hero');
>>>>>>> 71edb03f49e8516cfc09d5ebcbc5ebd2b8b4bc77
