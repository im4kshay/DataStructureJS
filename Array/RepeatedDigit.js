console.log("This program gives you 2 digit number, where digits are repeated twice like 33, 77,");

arr = new Array();

for(let number=1; number<100; number++)
{
  if(number%11 == 0)
  {
    arr.push(number);
  }
}
console.log("Numbers are: "+arr);