const button = document.querySelector("button");
const input = document.querySelector("input");


const readInput = function(){
    const inputs = input.value.split(",");
    // console.log(inputs);
    const first = Number(inputs[0]);
    const second = Number(inputs[1]);
    const output= document.getElementById("output");
    var outputs = "";
    outputs += "<h2>짜라란 뿅🤩 사칙연산 결과 뿅😎</h2>";
    // console.log(first);
    outputs += first + " + " + second + " = " + (first + second) + "<br />";
    outputs += first + " - " + second + " = " + (first - second) + "<br />";
    outputs += first + " * " + second + " = " + (first * second) + "<br />";
    outputs += first + " / " + second + " = " + (first / second) + "<br />";

    output.innerHTML += outputs;
}

button.addEventListener("click", function(){
    readInput();
})
