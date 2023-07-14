let number1 = 20;
let number2 = 10;
let number = 0;

if(number1 < number2)
{
    let box = number1;
    number1 = number2;
    number2 = box;
}

for(let i = 1; i < number1; i++)
{
    if(number1 % i == 0 && number2 % i == 0) number = i;    
}
console.log(number);