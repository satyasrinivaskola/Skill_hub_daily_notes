/*console.log("Hello Developer Today:46");
console.log(this)
//https://jsonplaceholder.typicode.com/posts
const  user={
name:"kkk",
village:"ppp",
}
fetch("https://jsonplaceholder.typicode.com/postss")
.then(res=>res.json())
.then(result=>console.log(result))
function data(){

console.log( "Skill Hub" +this.name)}
//skill hub ptp govt polytechnic collge
//ppp
/*function data1(){
console.log("Skill Hub "+this.name)}
//data("govt polytechnic collge")
//thisarg,arg1,arg2 call
//thisarg,[arg1,arg2 ]apply
const new_data=data.bind(user)
//data1.call(user)
new_data()
//console.log(new_data())
//let name
function greet (name="Hello World"){

console.log (name)}
greet("india")
//()=>{}
const gree3=(name)=>{
console.log(name)}
gree3("india")

function fn(n,callback){
return callback(n)
//console.log(callback)
}
const double=(n)=> {console.log ( n*2)}
double(5)
fn(5,double)
const d=function async(){setInterval(function data(){
console.log("data")},1000)}
d()
console.log("Hello")

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
Promise.resolve().then(()=>{console.log("data fetched")})


//Promise.resolve().then(()=>{console.log("Hello Data")})
const user={name:"ss",cap:"sss"}
let f=JSON.stringify(user)
console.log(JSON.parse(f))
console.log(JSON.stringify(user))
const methods={method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(user)
}
fetch("https://jsonplaceholder.typicode.com/posts",methods)
.then(res=>res.json())
.then(data=>{console.log (data)})
.catch(error=>console.log(error))
//console.log(dd)
//fetch("url",methods)
const user={name:"user",kk:"Id"}
const methods={
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({SS:"100"})
}
fetch("https://jsonplaceholder.typicode.com/posts",methods)
.then(res=>console.log(res.json()))
.then(data=>console.log(data))
*/

let newp=fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(data=>{return (data)})
//.catch(error=>console.log(error))
//console.log(newp)
let pp=newp.then((response)=>{return (response[0])})
console.log(pp)