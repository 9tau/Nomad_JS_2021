
//query selector는 hello class안에 h1값을 호출
const h1 = document.querySelector(".hello h1")

//조건에 따라 클래스명 삭제
function handleTitleClick() {
    if(h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

//classList에 clickedClass가 있는지 검사 -> 조건에 따라 clickedClass 변수 추가
function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

//toggle은 위에 함수와 동일하게 clicked 클래스를 추가 및 제거해줌
function handleTitleClick() {
    const clickedClass = "clicked";
    h1.classList.toggle("clicked");
}


window.addEventListener("click", handleTitleClick);
 