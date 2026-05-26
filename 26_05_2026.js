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

[ 1, 2, 3, 4, 5 ]
const [x,y,...rest]=numbersArray
console.log(rest.reduce((acc,tot)=>{return acc+tot},0))

const [x,y,...rest]=familyArray
  console.log(x+" "+y)
  console.log(rest.join(","))
function ratio(num1,num2){
return (num1%num2)}
console.log(ratio(31,6))
