console.log("https://apis.ccbp.in/countries-data");
let search_data=document.getElementById("search_data");

let listdata=document.getElementById("list-data")
function serach(){
console.log("Hello "+search_data.value)
fetch("https://apis.ccbp.in/countries-data")
.then(res=>res.json())
.then(data=>{
let r=data.filter((list)=>{

return list.name.toLowerCase().includes(search_data.value.toLowerCase())
})
console.log("eqal")
let mm=document.createElement('img');
mm.src=list.flag
listdata.appendChild(mm)
console.log(r)})
}
