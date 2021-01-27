const text = document.querySelector(".word").innerHTML;
const texts = text.split("");
// console.log(texts);
let wordBtn = document.querySelector(".wordBtn");
const btnArr = [];
const result = document.querySelector(".result");

for(var i = 0; i < text.length; i++){
    const btn = document.createElement("button");
    btn.innerHTML = text[i];
    wordBtn.appendChild(btn);
    btnArr.push(btn);
}
//문자열 버튼 만들기

const btns = document.querySelector(".btns")
const reverseBtn = document.createElement("button");
reverseBtn.innerHTML = "뒤집기"
btns.appendChild(reverseBtn);
const leftBtn = document.createElement("button");
leftBtn.innerHTML = "왼쪽으로 밀어내기"
btns.appendChild(leftBtn);
const rightBtn = document.createElement("button");
rightBtn.innerHTML = "오른쪽으로 밀어내기"
btns.appendChild(rightBtn);
//뒤집기, 밀어내기 버튼 만들기

const reversing = function(event){
    const reverTexts = texts.reverse();
    const reverseStr = reverTexts.join("");
    for(var i = 0; i < reverseStr.length; i++){
        btnArr[i].innerHTML = reverseStr[i];
    }
    if(text === reverseStr){
        result.innerHTML = "<strong>일치합니다.</strong>";
    }else{
        result.innerHTML = "일치하지 않습니다.";
    }
}
//뒤집기 버튼 함수 + 결과값 함수

const leftPush = function(event){
    const leftShift = texts.shift();
    texts.push(leftShift);
    const lshiftStr = texts.join("");
    for(var i = 0; i < lshiftStr.length; i++){
        btnArr[i].innerHTML = lshiftStr[i];
    }
    if(text === lshiftStr){
        result.innerHTML = "<strong>일치합니다.</strong>";
    }else{
        result.innerHTML = "일치하지 않습니다.";
    }
}
//왼쪽으로 밀기 버튼 함수 + 결과값 함수

const rightPush = function(event){
    const rightShift = texts.pop();
    texts.unshift(rightShift);
    const rshiftStr = texts.join("");
    for(var i = 0; i < rshiftStr.length; i++){
        btnArr[i].innerHTML = rshiftStr[i];
    }
    if(text === rshiftStr){
        result.innerHTML = "<strong>일치합니다.</strong>";
    }else{
        result.innerHTML = "일치하지 않습니다.";
    }
}

//오른쪽으로 밀기 버튼 함수 + 결과값 함수

reverseBtn.addEventListener("click", reversing);
leftBtn.addEventListener("click", leftPush);
rightBtn.addEventListener("click", rightPush);
//버튼 핸들러 함수 실행