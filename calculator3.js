const button = document.querySelector("button");
const nums = document.getElementById("nums");
const operator = document.getElementById("operator");


const readInput = function(){
    const inputs = nums.value.split(",");
    // console.log(inputs);
    const first = Number(inputs[0]);
    const second = Number(inputs[1]);
    const opInput = operator.value;
    const output= document.getElementById("output");
    var outputs = "";
    outputs += "<h2>주문하신 결과값 입니다🥑</h2>";
    // console.log(opInput);
    switch(opInput){
        case "+":
            outputs += first + " + " + second + " = " + (first + second);
            break;
        case "-":
            outputs += first + " - " + second + " = " + (first - second);
            break;
        case "*":
            outputs += first + " * " + second + " = " + (first * second);
            break;
        case "/":
            outputs += first + " / " + second + " = " + (first / second);
            break;
        default:
            outputs += "❌사칙연산자만 입력해주세요.❌"
        
    }
    output.innerHTML += outputs;
}

button.addEventListener("click", function(){
    readInput();
})
