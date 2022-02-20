const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const link = document.querySelector("a")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username)
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`;

}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    // 유저정보가 없으면 히든 클래스는 지우고
    // 로그인폼은 보이게 해줘 
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreeting(savedUsername)
}



// 링크 거는법
// function handleLinkClick(event){
//     event.preventDefault()
//     alert("cliked")
//  }
 
// link.addEventListener("click", handleLinkClick)

