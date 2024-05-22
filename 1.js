let input = "Pritam Roy Choudhury";

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}
console.log("Original String: ", input)

function reverseDelay(inputString) {
    setTimeout(() => {
        let reversed = reverseString(inputString);
        console.log("Reversed String: " + reversed);
    }, 2000);
}

reverseDelay(input);