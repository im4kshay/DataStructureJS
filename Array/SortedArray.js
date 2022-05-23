console.log("This program generates 10 random 3 digit value and store it into array,"+
 "then sort it and give 2nd largest and smallest element");
let randomArray = new Array();
let value;

for (let i=0; i<=10; i++)
{
  value = Math.floor(Math.random()*999);
  if(value<100)
    value +=100;
  
  randomArray.push(value);
}
console.log("\nDisplaying array elements: "+randomArray);

let sortedArr = randomArray.sort();
console.log("\nDisplaying sorted array elements: "+sortedArr);
console.log("\nsecond Largest element:"+sortedArr[sortedArr.length-2]);
console.log("\nsecond smallest element:"+sortedArr[1]);