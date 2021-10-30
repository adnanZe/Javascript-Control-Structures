// setup to generate array 
console.log('=================== 0. Generating Array ===================');

let array = [];

let arrayGenerator = (lengthArray, maximumNumberOfArray) => {
  for(let i = 0; i < lengthArray; i++) {
    array.push(Math.floor(Math.random() * (maximumNumberOfArray + 1)));
  }
}

arrayGenerator(20,50)

console.log(array);

// display in the console the numbers from 1 to 20
console.log('=================== 1. exercise START ===================');


for(let i = 1; i <= 20; i++) {
  console.log(i);
}


// display in the console the odd numbers from 1 to 20
console.log('=================== 2. exercise START ===================');


for(let i = 1; i <= 20; i++){
  if(i % 2 == 1){
    console.log(i);
  }
}


// compute the sum of the elements of an array and display it in the console
console.log('=================== 3. exercise START ===================');

let sum = null;

for (let i = 0; i < array.length; i++){
  sum = sum + array[i];
}

console.log('sum of the elements of the array is ' + sum);


// compute the maximum of the elements of an array and display it in the console
console.log('=================== 4. exercise START ===================');

let max = null;

for(let i = 0; i < array.length; i++) {
  if(array[i] > max){
    max = array[i];
  }
}

console.log('maximum number of the elements of the array is ' + max);


// compute how many times a certain element appears in an array - tips: use object, var element = 2
console.log('=================== 5. exercise START ===================');

array = [];

arrayGenerator(10,5)

console.log('NEW ARRAY is down \\/');
console.log(array);

let key = 2;
let counter = 0;

for(let i = 0; i < array.length; i++) {
  if(key == array[i]){
    counter++;
  }
}

console.log(key + ' element appear ' + counter + ' time(s) in the array');


// Using nested control structures (doua for + if) for generate the following pattern
console.log('=================== 6. exercise START ===================');

let j = 0;
let pattern = '';

for(let i = 0; i < 16; i++){
  pattern += ((i + j) % 2) + ' ';
  if(i % 4 == 3){
    pattern +='\n';
    j++;
  }
};

console.log(pattern);



