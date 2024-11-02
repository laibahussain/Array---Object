let pizzashop = [
  {title:"chicken" , price : 1000 , description: "pizza" , quantity : 1},
  {title:"fajita" , price : 1200 , description: "pizza" , quantity : 1},
  {title:"peporoni" , price : 1500 , description: "pizza" , quantity : 1},
  {title:"supreme" , price : 2000 , description: "pizza" , quantity : 1},
  {title:"cheese" , price : 900 , description: "pizza" , quantity : 1},
  {title:"veg" , price : 500 , description: "pizza" , quantity : 1},
  {title:"veg" , price : 500 , description: "pizza" , quantity : 1},
  {title:"veg" , price : 500 , description: "pizza" , quantity : 1},
  {title:"veg" , price : 500 , description: "pizza" , quantity : 1},
]
// why we use const?
// we can use let and const it does not matter
const orders = [
  {id : 1 , name : "john" , order : ["chicken" ,  "supreme"] , qiantity : 2},
  {id : 2 , name : "gabriel" , order : ["supreme" ,  "supreme"] , qiantity : 1},
  {id : 3 , name : "adam" , order : ["veg" ,  "supreme"] , qiantity : 1},
  {id : 4 , name : "isac" , order : ["peporoni" ,  "supreme"] , qiantity : 2},
  {id : 5 , name : "esa" , order : ["cheese" ,  "supreme"] , qiantity : 1},
  {id : 5 , name : "esa" , order : ["margarita"] , qiantity : 1},
]
console.log(orders[3])

for(let i = 0 ; i<orders.length ; i++){
  let flavor = orders[i].order
  let total = 0 
  for(let j = 0 ; j<flavor.length ; j++){
    let item = flavor[j]           
                                    // x    =>   x.title
    let product = pizzashop.find(product => product.title === item)
    if(product){
      total += product.price
      console.log(total)
    }
    // else{
    //   console.log(`${item} not found`)
    // }
  }
}
for(let i = 0 ; i < pizzashop.length ; i++){
  // if(pizzashop[i].title === "supreme"){
  if(pizzashop[i].title === pizzashop[i].title){
  //  let free =  pizzashop[i].quantity * 2
   let money = pizzashop[i].price
   let pizza = pizzashop[i].title
   let discount = money*0.3
   let disprice = money - discount 
   let tax = disprice*0.2
   let total = tax + disprice
    // console.log(`You ordered 1 pizza and got 1 ${pizza} flavor pizza free. your total pizzas are ${free}. your actual bill is ${money}`)
    console.log(`you ordered ${pizza} flavor pizza. Actual bill is ${money} after discount and applying tax your bill is ${total}`)
  }
}
let product = pizzashop.find(product => product.title === "veg")

// let tot = product.price* product.length  (this is not the right way to get price of 4 veg pizzas, how don we get price of 4 veg pizza)

console.log(product.quantity)
console.log(product.title)
console.log(product.price)
console.log(product.description)

             // you can only find length of product by using filter method function

let productt = pizzashop.filter(productt => productt.title === "veg")
console.log(productt.length)
let produc = pizzashop.map(produc => produc.title === "veg")
console.log(produc.price)