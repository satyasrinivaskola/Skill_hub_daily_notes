/*console.log("Hello Today 16-05-1016");

const user={title:"kkk",country:"india"}
//
const m={
method:"GET",
headers:{"Content-Type":"application/json"}
//body:JSON.stringify(user)
}

fetch("https://jsonplaceholder.typicode.com/posts/"+6,m)
.then(res=>res.json())

.then(data=> {console.log (data)}) //Promises
   
const f=JSON.stringify(user) //
console.log(JSON.parse(f))


//console.log(ff)
console.log("Hello Today 16-05-2016");


function pure(){


console.log(2+3)

}
pure()
pure()

let counter = 0;
function increment(a) {
return counter=a+counter;
}
console.log(increment(1));
console.log(increment(1));
console.log(increment(1));

function main() {
  const firstNumber  = JSON.parse(readLine());
  const secondNumber = JSON.parse(readLine());
  
  const numberPair1 = new NumberPair(firstNumber, secondNumber);  

  console.log(firstNumber/secondNumber)
}*/
/*
[ 1, 2, 3, 4, 5 ]
const [x,y,...rest]=numbersArray
console.log(rest.reduce((acc,tot)=>{return acc+tot},0))

const [x,y,...rest]=familyArray
  console.log(x+" "+y)
  console.log(rest.join(","))
function ratio(num1,num2){
return (num1%num2)}
console.log(ratio(31,6))
*/

// console.log("Hello ")

// function order(callback)
// {

// console.log("Order");
// callback()
// }

// order(function (){
// console.log("Payment");
// })
/*  */
// let hel=document.getElementById("hel");
// let input=document.getElementById("input");
// async function data(){
// console.log("Button")
// let res=await fetch("https://jsonplaceholder.typicode.com/posts/"+input.value)
// let d=await res.json()
// console.log(d.title)
// hel.innerHTML=d.title
// //return(d.title)
// //.then(data=>{console.log("Hello");return(data)})
// }
//console.log(data())
//console.log(ss())
//console.log(dd)
/* 
let hel=document.getElementById("hel");
let input=document.getElementById("input");
async function data(){
console.log("Button")
fetch("https://jsonplaceholder.typicode.com/posts/"+input.value)
.then(res=> res.json())
.then(d=>{
console.log(d.title)
hel.innerHTML=d.title})
//return(d.title)
//.then(data=>{console.log("Hello");return(data)})
} */
// let url
// const fn=async function (){
// let f=await fetch("https://apis.ccbp.in/countries-data")
// let d=await f.json()
// console.log()
// url=d[0].flag
// console.log(d[0].flag)
// }

// let hel=document.getElementById("hel");
// let input=document.getElementById("input");
// async function data(){
// console.log("Button")
// fetch("https://jsonplaceholder.typicode.com/posts/"+input.value)
// .then(res=> res.json())
// .then(d=>{
// console.log(d.title)
// hel.innerHTML=d.title})
//return(d.title)
//.then(data=>{console.log("Hello");return(data)})
fetch("https://jsonplaceholder.typicode.com/posts/2")
.then(res=>res.json())
.then(data=>{console.log(data.userId)})