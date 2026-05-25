console.log("Hello Developer Today:46");
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
console.log("Skill Hub "+this.name)}*/
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