
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");



function OnLoignSubmit() {
    const username = loginInput.value
    console.log(username);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    
}


loginForm.addEventListener("submit", OnLoignSubmit);
link.addEventListener("click",handleLinkClick);

/*
loginForm.addEventListener("submit", OnLoignSubmit());
함수 옆에 ()있으면 submit 하지않아도 바로 발동

function OnLoignSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
}

loginForm.addEventListener("submit", OnLoignSubmit);

위의 function이 하나의 argument(tomato)를 받도록 하고 JS로 넘겨줌
form을 submit 했을 때 해당 함수를 그냥 호출하는 것이 아님
유저가 필요로 할만한 정보들을 추가 제공 submitter, target 등등
onLoginSubmit({information})

preventDefault() 함수는 브라우저가 기본 동작을 실행하지 못하게 막아주는 역할

*/
