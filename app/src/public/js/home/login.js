"use strict"


//프론트 단에서 동작하는 자바 스크립터이다. 
// console.log("hello java script");
// console.log("bye bye");

//DOM -> Document object model 자바스크립터에서 html에 존재하는 데이터를 가져와서
//제어할 수 있게 된다.
//HTML에서 선택자를 지정을 할 수 가 있다. 


const id = document.querySelector("#id");
const pswd = document.querySelector("#pswd");
const loginBtn = document.querySelector("button");

console.log(id);
console.log(pswd);

loginBtn.addEventListener("click", login )

function login() {
    //console.log(id.value);
    const req = {
        id: id.value,
        pswd: pswd.value,
    };

    console.log(req);
    //서버에   req를 전달한다. 
    // fetch();
}
