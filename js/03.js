//초기 변수 선언
let picwidth = 1440;
let moveNum = 0;
const totalNum = 3;

//이미지 위치 셋팅
for(var i=0; i<totalNum; i++){
    document.getElementById("pic" + i).style.left = (picwidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;
document.getElementById("text" + moveNum).classList.add("active");

//동적으로 점 인디케이터 생성
let dotList = document.createElement("ul");
//섹션속 맨앞에 붙이기
// document.getElementById("section1").prepend(dotList);
//id값 붙이기
dotList.setAttribute("id", "dotList");
//섹션속 뒤에 붙이기
document.getElementById("section1").appendChild(dotList);

for(var i=0; i<totalNum; i++){
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i)
    document.getElementById("dotList").appendChild(li);
    document.getElementById("li" + i).innerText = i;
    document.getElementById("li" + i).onclick = function(){
        aniFunction();
        //아이디 자르기, 2번째 자리에서 하나 잘라
        // console.log(this.id.substr(2,1));
        moveNum = this.id.substr(2,1);
        moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.add("active")

//좌우 버튼 셋팅 prev_btn, next_btn
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "prev";
document.getElementById("imgSet").appendChild(prev_btn);

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = "next";
document.getElementById("imgSet").appendChild(next_btn);

//이미지 움직임 함수 선언
var aniFunction = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
}
var moveFunction = function(){
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picwidth * (i-moveNum)) + "px";
    }
    document.getElementById("temp").innerText = moveNum;
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");
    
    //인디케이터 빨간색
    for(var i=0; i<totalNum; i++){
        document.getElementById("li" + i).classList.remove("active")
    }
    document.getElementById("li" + moveNum).classList.add("active")
}

//좌우 버튼 제어
document.getElementById("prev_btn").onclick = function(){
    aniFunction();
    if(moveNum > 0){
        moveNum--;
    }
    moveFunction();
}

document.getElementById("next_btn").onclick = function(){
    aniFunction();
    if(moveNum < (totalNum - 1)){
        moveNum++;
    }
    moveFunction();
}