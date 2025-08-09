// function sum(num) {
//   let sum = 0;
//   for (const numb of num) {
//     console.log(numb);
//     sum = sum + numb;
//   }
//   return sum;
// }
// const number = [2, 4, 6, 10];
// const sumOf = sum(number);
// console.log("answer", sumOf);

// even

function evenNum(numbers) {
  let even = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      console.log(num);
      even.push(num);
    }
  }
    return even;
}
const number = [3, 5, 6, 8, 10, 14];
// const even = evenNum(number);
// console.log(even);


function sumOfEven(num){
 let sum = 0;
    for(const number of num){
       if(number % 2 === 0) {
        console.log(number);
        sum = sum + number;
        
       }
    }
    return sum;
}
const sum = sumOfEven(number);
console.log('total',sum);

