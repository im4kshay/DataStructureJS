console.log("This program generates 10 random 3 digit value and store it into array");
let randomArray = new Array();
let value;

for (let i=0; i<=10; i++)
{
  value = Math.floor(Math.random()*999);
  if(value<100)
    value +=100;
  
  randomArray.push(value);
}
console.log(randomArray);