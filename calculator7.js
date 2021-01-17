const input = {};     //값을 입력받는 객체

input.init = function(str){
    this.list = str.split(" ");
};

input.empty = function(){
    return this.list.length === 0;
}

input.getValue = function(){
    const str = this.list.shift();
    const n = Number(str);
    return n;
};
input.getOperator = function(){
    const op = this.list.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/"){
        return op;
    }else{
        alert("사칙연산자를 입력해주세요.");
    }
};


const calculator = {};     //계산하는 객체 
calculator.calculate = function(first, second, op){
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
            return NaN;
        }
        return outputs;
    };
                
                
const printOut = {};     //출력하는 객체
printOut.output = document.getElementById("output");
printOut.print = function (result){
    this.output.innerHTML = "<h2>🤯최종 결과 값은 " + result + " 입니다🤯</h2>";
};


function calc(){
    const str = document.getElementById("input").value;
    input.init(str);
    var results = input.getValue();
    while(!input.empty()){
        const op = input.getOperator();
        const second = input.getValue();
        results = calculator.calculate(results, second, op);
    }
    printOut.print(results);
}

const btn = document.querySelector("button");
btn.addEventListener("click", function(){
    calc();
});
