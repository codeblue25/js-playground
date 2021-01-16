function getFirstValue(){
    const firstNum = Number(prompt("첫번째 숫자를 입력해주세요."));
    return firstNum;
}
function getSecondValue(){
    const nexts = Number(prompt("다음 숫자를 입력해주세요."));
    return nexts;
} 
function getOperator(){
    while(true){
        var op = prompt("연산자를 입력해주세요. (종료시 'end' 입력)");  //재선언 해야하기 때문에 let이랑 const는 안됨
        if (op === "end" || op === "+" || op === "-" || op === "*" || op === "/"){
            break;
        }else{
            alert("사칙연산자를 입력해주세요.");
        }
    }
    return op;
}
function calculate(first, second, op){
    var outputs;
    switch(op){
        case "+":
            // outputs = first + " + " + second + " = " + (first + second);
            outputs = first + second;
            break;
        case "-":
            // outputs = first + " - " + second + " = " + (first - second);
            outputs = first - second;
            break;
        case "*":
            // outputs = first + " * " + second + " = " + (first * second);
            outputs = first * second;
            break;
        case "/":
            // outputs = first + " / " + second + " = " + (first / second);
            outputs = first / second;
            break;
        default:
            outputs = "❌사칙연산자만 입력해주세요.❌"
        
    }
    return outputs;
}
function print(result){
    return "<h2>✅최종 결과 값은 " + result + " 입니다.</h2>";
}

function main(){
    var value = getFirstValue();
    while(true){
        var op = getOperator();
        if (op === "end"){
            break;
        }
        var num = getSecondValue();
        value = calculate(value, num, op);
    }
    const output = document.getElementById("output");
    output.innerHTML = print(value);
}

main();

