function main(){
    const first = Number(prompt("첫번째 숫자를 입력해주세요."));
    const output = document.getElementById("output");
    let result = first;  //계산되는 대로 result 변수에 값으로 들어오기 때문에, 변수 선언시 const가 아니라 let으로 해야한다.
    
    while (true){
        const op = prompt("연산자를 입력해주세요. (종료시 'end' 입력)");
        if (op === "end"){
            break;
        }
        const nexts = Number(prompt("다음 숫자를 입력해주세요."));
        
        if (op === "+"){
            result += nexts;
        }else if (op === "-"){
            result -= nexts;
        }else if (op === "*"){
            result *= nexts;
        }else if (op === "/"){
            result /= nexts;
        }else{
            break;
        }
    }
    output.innerHTML = "<h2>✅최종 결과 값은 " + result + " 입니다.</h2>";
}

main();