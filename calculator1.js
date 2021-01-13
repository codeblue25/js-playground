var input = prompt("두 수를 입력하세요. (예: 1, 2)");
var inputs = input.split(",");

var first = Number(inputs[0]);
        // console.log(first);
var second = Number(inputs[1]);
        // console.log(second);
function main(){
    console.log(first + " + " + second + " = " + (first + second));
    console.log(first + " - " + second + " = " + (first - second));
    console.log(first + " * " + second + " = " + (first * second));
    console.log(first + " / " + second + " = " + (first / second));
}

main(); 