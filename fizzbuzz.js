function fizzBuzz(){
    for (let number = 1; number <= 100; number++){
        if (number % 15 === 0){
            console.log("FizzBuzz");
        }
        else if (number % 5 === 0){
            console.log("Buzz");
        }
        else if (number % 3 === 0){
            console.log("Fizz");
        }
        else {
            console.log(number);
        }
    }
}

fizzBuzz();

function fizzBuzzWithInput(input){
    if (input > 0 && input <= 100){
        if (input % 15 === 0){
            console.log("FizzBuzz");
        }
        else if (input % 5 === 0){
            console.log("Buzz");
        } 
        else if (input % 3 === 0){
            console.log("Fizz");
        } 
        else {
            console.log(input);
        }
    }
}

fizzBuzzWithInput(15);
fizzBuzzWithInput(25);
fizzBuzzWithInput(9);
fizzBuzzWithInput(4);