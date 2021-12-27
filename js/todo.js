const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); //JSON.stringify는 배열에 저장할 때 string 형태로 저장한다
}

function deleteToDo (event) {
    const li = event.target.parentElement;  //parentElement의 innerText 값을 알 수 있다
    li.remove(); 
}

function paintToDo(newToDo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(list);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; //newToDo 변수에 새로운 값을 저장
    toDos.push(newToDo);
    console.log(toDoInput.value);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);