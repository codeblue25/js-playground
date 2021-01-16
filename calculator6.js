const input = {count:2};     //값을 입력받는 객체
input.getFirstValue = function(){
    const firstNum = Number(prompt("첫번째 숫자를 입력해주세요."));
    return firstNum;
};
input.getSecondValue = function(){
    const nexts = Number(prompt(this.count + "번째 숫자를 입력해주세요.")); //여기서 count는 '멤버변수' 라고 한다.
    this.count++;
    return nexts;
};
input.getOperator = function(){
    while(true){
        var op = prompt("연산자를 입력해주세요. (종료시 'end' 입력)");
        if (op === "end" || op === "+" || op === "-" || op === "*" || op === "/"){
            break;
        }else{
            alert("사칙연산자를 입력해주세요.");
        }
    }
    return op;
};


const calc = {};     //계산하는 객체 
calc.calculate = function(first, second, op){
    var outputs;
    var first 
    switch(op){
        case "+":
            outputs = first + second;
            break;
        case "-":
            outputs = first - second;
            break;
        case "*":
            outputs = first * second;
            break;
        case "/":
            outputs = first / second;
            break;
        default:
            outputs = "❌사칙연산자만 입력해주세요.❌"
        
    }
    return outputs;
};


const printOut = {};     //출력하는 객체
printOut.output = document.getElementById("output");
printOut.print = function (result){
    this.output.innerHTML = "<h2>✅최종 결과 값은 " + result + " 입니다.</h2>";
};


function main(){
    var value = input.getFirstValue();
    while(true){
        var op = input.getOperator();
        if (op === "end"){
            break;
        }
        var num = input.getSecondValue();
        value = calc.calculate(value, num, op);
    }
    printOut.print(value); 
    // output.innerHTML = printOut.print(value);
}

main();