// let price = 25
// let comPrice = price;

// price = 20
// comPrice = 15;

// console.log(price);
// console.log(comPrice);

const price = [25, 25, 25];
const comPrice = []
for (const cp of price){
    comPrice.push(cp);
}
comPrice[0]= 15;
price[1]=10;

// console.log(price);
// console.log(comPrice);


const number = [1,3,5,6,7]
// const newNum = Array.from(number)
// spread
const newNum = [...number]
newNum.push(40)

console.log(number);

console.log(newNum);
