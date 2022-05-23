console.log("This program gives the prime Factors of given number..")
const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter any number: '));
let primeArray = new Array();

for(let i=2;i<=number;i++)
{
  if (number % i==0)
  {
    while (number % i==0)
    {
      number = number/i; 
    }
    primeArray.push(i);
  }
}
console.log("Displaying Prime factors: "+primeArray);