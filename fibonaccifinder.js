function fibonacciFinder50(){
    let x = 0;
    let y = 1;
    let counter = 1;
    let fibNumber = 0;
    while (counter < 50){
        fibNumber =  x + y;
        x = y;
        y = fibNumber;
        counter += 1;
    }
    return fibNumber
}

console.log(fibonacciFinder50()); 


function fibonacciFinder(seqNumber){
    let x = 0;
    let y = 1;
    let counter = 1;
    let result = 0;
    while (counter < seqNumber){
        result = x + y;
        x = y;
        y = result;
        counter += 1;
    }
    return result
}

console.log(fibonacciFinder(300));