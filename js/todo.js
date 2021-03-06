const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 배열에 저장할 때 string 형태로 저장한다
}

function deleteToDo (event) {
    const li = event.target.parentElement;  //parentElement의 innerText 값을 알 수 있다
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //filter 함수는 배열 값을 특정 함수에 대입하여 각각의 값이 True/False 인지 판단한다 False인 값은 필터링
    li.remove();
    saveToDos();
}

function paintToDo(newToDo) {
    const list = document.createElement("li");
    list.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(list);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; //newToDo 변수에 새로운 값을 저장
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //toDos에 변수값 저장
    console.log(toDoInput.value);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);  //savedToDos 전체 변수값을 각각의 object로 변환
    parsedToDos.forEach((item) => console.log("this is the turn of", item)); //array 각각의 데이터 마다 sayHello 함수 발동
    // => arrow function 사용
    toDos = parsedToDos; //새로고침 시 toDos에 저장된 값이 초기화되지 않도록 저장
    parsedToDos.forEach(paintToDo);
}