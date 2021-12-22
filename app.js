const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function OnLoignSubmit() {
    const username = loginInput.value
    console.log(username);
}


//loginForm id에 해당 인자를 add하거나 remove 한다\
//`Hello ${username}` = "Hello " + username;
//localstorage는 브라우저에 변수을 선언하고 인자를 저장, 제거할 수 있다
function handleLinkClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit",handleLinkClick);


