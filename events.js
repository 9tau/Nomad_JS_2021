
//query selector는 hello class안에 h1값을 호출
const title = document.querySelector(".hello h1")

//마우스 hover 시 발동
function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

//마우스 h1 영역밖으로 벗어나면 발동
function handleMouseLeave() {
    title.innerText = "Mouse is leave";
}

//Window resize시 백그라운드 컬러 변경
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("WIFI");
}



//클릭하면 handleTitleClick 함수가 발동되며 event add 실시

title.addEventListener("mouseenter", handleMouseEnter);

title.addEventListener("mouseleave", handleMouseLeave);


console.log(title);

//title의 javascript object list를 보여줌
console.dir(title);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
