function wordReverse(input){
    let wordArray = input.split(" ");
    let reversedString = wordArray.reverse();
    let combinedReversedString = reversedString.join(" ");
    return combinedReversedString;
}

console.log(wordReverse("Hello team how are we"));