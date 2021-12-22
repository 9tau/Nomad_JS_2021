
//query selector는 hello class안에 h1값을 호출
const title = document.querySelector(".hello h1")

//함수가 다를 뿐 아래 두 표현은 같다
const title = document.getElementById("hello");
const title = document.querySelector("#hello");

console.log(title);