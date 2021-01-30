let wordBtn = document.querySelector(".wordBtn");
const text = document.querySelector(".word");
const result = document.querySelector(".result");
//HTML elements

const puzzle = {
    "btnArr": [],
    "maxPlay": 5,
    "current": 0
};
puzzle.textArr = ["HELLO", "JAVASCRIPT", "BIBIMNOODLE", "CHILL", "PRIVATE", "OMEGATHREE", "KEYBOARD", "FEBUARY", "STRAWBERRY", "CODEBLUE"];
//puzzle 객체 생성

puzzle.choose = function(){
    const index = Math.floor(Math.random() * this.textArr.length);
    this.answer = this.textArr[index];
    this.letters = this.answer.split("");
    text.innerHTML = this.answer;
};
//textArr에서 단어 하나 고르기

puzzle.addBtns = function(){
    for(var i = 0; i < this.letters.length; i++){
        const btn = document.createElement("button");
        btn.innerHTML = this.letters[i];
        wordBtn.appendChild(btn);
        this.btnArr.push(btn);
    }
};
//고른 단어에 따라 문자열 버튼 만들기

puzzle.removeBtn = function(){
    for(var i = 0; i < this.btnArr.length; i++){
        wordBtn.removeChild(this.btnArr[i]);
    }
    this.btnArr = [];
};
//이전 문자열 버튼 지우기

puzzle.showResult = function(){
    const puzzleStr = this.letters.join("");
    if(this.answer === puzzleStr){
        this.current++;
        this.removeBtn();
        this.init();
        this.shuffle();
        let score = "";
        for(var i = 0; i < this.current; i++){
            score += "👍";
        }
        result.innerHTML = "현재 점수 : " + score;
    }
    if(this.current === this.maxPlay){
        alert("5개를 모두 맞췄습니다!");
        return;
    }
};
//게임 결과 보여주기

puzzle.init = function(){
    this.choose();
    this.addBtns();
    // this.showResult();
};
puzzle.init();
//초기화 함수 모아놓고 실행시키기

puzzle.copyBtnTxt = function(){
    for(var i = 0; i < this.answer.length; i++){
        this.btnArr[i].innerHTML = this.letters[i];
    }
};
//버튼에 문자열 넣어주기

const btns = document.querySelector(".btns");
const reverseBtn = document.createElement("button");
const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");
reverseBtn.innerHTML = "뒤집기"
leftBtn.innerHTML = "왼쪽으로 밀어내기"
rightBtn.innerHTML = "오른쪽으로 밀어내기"
btns.appendChild(reverseBtn);
btns.appendChild(leftBtn);
btns.appendChild(rightBtn);
//뒤집기, 밀어내기 버튼 만들기

const reversing = function(event){
    const temp = [];
    while(puzzle.letters.length != 0){
        const str = puzzle.letters.pop();
        temp.push(str);
    }
    puzzle.letters = temp;
    puzzle.copyBtnTxt();
    puzzle.showResult();
};
//뒤집기 버튼 함수

const leftPush = function(event){
    const str = puzzle.letters.shift();
    puzzle.letters.push(str);
    puzzle.copyBtnTxt();
    puzzle.showResult();
};
//왼쪽으로 밀기 버튼 함수 

const rightPush = function(event){
    const str = puzzle.letters.pop();
    puzzle.letters.unshift(str);
    puzzle.copyBtnTxt();
    puzzle.showResult();
};
//오른쪽으로 밀기 버튼 함수

reverseBtn.addEventListener("click", function callback(e){
    e.preventDefault();
    reversing();
});
leftBtn.addEventListener("click", function callback(e){
    e.preventDefault();
    leftPush();
});
rightBtn.addEventListener("click", function callback(e){
    e.preventDefault();
    rightPush();
});
//버튼 핸들러 함수 실행 + 정답 시 새로고침

puzzle.shuffle = function(){
    const toggle1 = Math.floor(Math.random() * 2) === 0;
    if(toggle1){
        reversing();
    }
    const toggle2 = Math.floor(Math.random() * this.letters.length);
    for(let i = 0; i < toggle2; i++){
        leftPush();
    }
};
puzzle.shuffle();
//문자열 버튼 랜덤하게 출력하기