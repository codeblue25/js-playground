const textObj = {
    text : "HELLO"
};
document.write(textObj.text + "<br/>");
const texts=textObj.text.split("") 
console.log(texts);
//HTML에 문자열 표시, 문자열로 배열 만들기

for(var i = 0; i < texts.length; i++){
    const btn = document.createElement("button");
    btn.innerHTML = texts[i];
    document.body.appendChild(btn);
}
document.write("<br />");
//문자열 버튼 만들기

const reverseBtn = document.createElement("button");
reverseBtn.innerHTML = "뒤집기"
document.body.appendChild(reverseBtn);
const pushBtn = document.createElement("button");
pushBtn.innerHTML = "밀어내기"
document.body.appendChild(pushBtn);
//뒤집기, 밀어내기 버튼 만들기

const result = document.createElement("h4");
result.innerHTML = "일치합니다."
document.body.appendChild(result);
//일치합니다 문자열 표시

const reversing = function(event){
    const reverTexts = texts.reverse();
    console.log(reverTexts);
}
reverseBtn.addEventListener("click", reversing);
//뒤집기 버튼에 핸들러 함수 작성

const pushing = function(event){
    let first = texts[0];
    const shifted = texts.shift();
    const pushedTexts = texts.push(first);
    console.log(texts);
}
pushBtn.addEventListener("click", pushing);
//밀어내기 버튼에 핸들러 함수 작성