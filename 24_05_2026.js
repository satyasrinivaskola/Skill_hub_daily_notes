//fetch
/*
user={
name:"satya",
id:"3333"}
console.log(user);
const methods={method:"GET",
headers:{"content-type":"application/json"}}
fetch("https://jsonplaceholder.typicode.com/posts",methods)
.then(res=>res.json())
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})
*/
//Post
const user={
name:"kola",
id:"3333"}
console.log(user.keys)
const methods={
method:"DELETE",
headers:{"content-type":"application/json"},
body:JSON.stringify({id:"kkk"})}

fetch("https://jsonplaceholder.typicode.com/post/1",methods)
.then(res=>res.json())
.then(result=>console.log(result))
.catch(error=>console.log(error))
/*console.log("Hello Api");
console.log(this)
const details={
name:"Yashu",
VIllage:"kkt",
address:{
door:"4-100"},
}
const user2={
namee:"satya"}
function Street(village,street){
console.log(this.name+`welcome to skill hub and expore new techie word ${village} ${street}`)
}
const newstreet=Street.bind(details,"Pitapuram","Ramayalam");
newstreet()
//Street.call(user2)
user={
name:"ddd",
id:7}
console.log(typeof(user))
console.log(JSON.stringify(user))
console.log(typeof(JSON.parse(JSON.stringify(user))))
let d
const methods={
method:"GET",
Headers:{"content-type":"application/json"
},

}

fetch("https://jsonplaceholder.typicode.com/posts",methods)
.then(res=>res.json())
.then(result=>{console.log( result[0].title)
})
d=fetch()
console.log(d)*/s