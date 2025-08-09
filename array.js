// const fruit = ['apple','mango','guava', 'orange','kiwi','pineapple']

// for(let i =0 ;i<fruit.length;i++){
//     console.log(fruit[i]);
// }

// --------reverse--------//


// const price = [12,14,16,11,18]
// const reverse = [];
// for(let i = price.length-1;i>=0;i--)
// {   
  
//     reverse.push(price[i]);
// }
// console.log(price);

// console.log(reverse);


// ----using unshift--------//

// const price = [12,14,16,11,18]
// const reverse = [];
// for(let i =0 ;i< price.length;i++)
// {   
//     // console.log(price[i]);
    
//     reverse.unshift(price[i]);
// }
// console.log(price);

// console.log(reverse);

// ---------using reverse------//
//  const fruit = ['apple','mango','guava', 'orange','kiwi','pineapple']

//  console.log(fruit.reverse());


// ---------array of object----------//

const person = [{name: 'sazid',age: 26 ,job: 'developer'},
{name: 'nahid',age: 28 ,job: 'scammer'},
{name: 'zahid',age: 36 ,job: 'teacher'},
]

// console.log(person[0].job);
for(const value of person){
    console.log(value.job);
    
}

 