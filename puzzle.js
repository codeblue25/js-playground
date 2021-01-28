let wordBtn = document.querySelector(".wordBtn");
const text = document.querySelector(".word");
const result = document.querySelector(".result");
const btnArr = [];
const textArr = ["HELLO", "JAVASCRIPT", "BIBIMNOODLE", "CHILL", "PRIVATE", "OMEGATHREE", "KEYBOARD", "FEBUARY", "STRAWBERRY", "CODEBLUE"];
const randomStr = function(){
    const index = Math.floor(Math.random() * textArr.length);
    return textArr[index];
}
const texts = randomStr();
text.innerHTML = texts;
const stexts = texts.split("");
console.log(texts);
console.log(stexts);
//첫 줄에 문자열을 문자열 배열에서 랜덤으로 불러오기

for(var i = 0; i < texts.length; i++){
    const btn = document.createElement("button");
    btn.innerHTML = texts[i];
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
    const reverseStr = stexts.reverse().join("");
    for(var i = 0; i < reverseStr.length; i++){
        btnArr[i].innerHTML = reverseStr[i];
    }
    if(texts === reverseStr){
        result.innerHTML = "<h2>일치합니다.✅</h2>";
    }else{
        result.innerHTML = "😪일치하지 않습니다.😪";
    }
}
//뒤집기 버튼 함수 + 결과값 함수

const leftPush = function(event){
    const leftShift = stexts.shift();
    stexts.push(leftShift);
    const lshiftStr = stexts.join("");
    for(var i = 0; i < lshiftStr.length; i++){
        btnArr[i].innerHTML = lshiftStr[i];
    }
    if(texts === lshiftStr){
        result.innerHTML = "<h2>일치합니다.✅</h2>";
    }else{
        result.innerHTML = "😪일치하지 않습니다.😪";
    }
}
//왼쪽으로 밀기 버튼 함수 + 결과값 함수

const rightPush = function(event){
    const rightShift = stexts.pop();
    stexts.unshift(rightShift);
    const rshiftStr = stexts.join("");
    for(var i = 0; i < rshiftStr.length; i++){
        btnArr[i].innerHTML = rshiftStr[i];
    }
    if(texts === rshiftStr){
        result.innerHTML = "<h2>일치합니다.✅</h2>";
    }else{
        result.innerHTML = "😪일치하지 않습니다.😪";
    }
}
//오른쪽으로 밀기 버튼 함수 + 결과값 함수

reverseBtn.addEventListener("click", reversing);
leftBtn.addEventListener("click", leftPush);
rightBtn.addEventListener("click", rightPush);
//버튼 핸들러 함수 실행

const toggle1 = Math.floor(Math.random() * 2) === 0;
if(toggle1){
    reversing();
}
const toggle2 = Math.floor(Math.random() * texts.length);
for(let i = 0; i < toggle2; i++){
    leftPush();
}
//문자열 버튼 랜덤하게 출력하기