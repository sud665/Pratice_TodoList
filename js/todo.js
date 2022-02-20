const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//자료 저장하기 선언 전에 입력한 값도 지워지지 않게 하기 위해 let으로 변수 선언한다! 
let toDos = [];

//로컬스토리지 키!! 
const TODOS_KEY = "todos"

function saveToDos(){
    //입력되는 값을 로컬스토리지에 저장하기! 
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // 우리가 삭제하고 싶은 대상을 선택하는법 타겟을 찾아준다. 
   const li = event.target.parentElement;
   li.remove();
   
   // 선택한 아이디는 li.id 찾는다. 그래서 다시 필터한다. 그리고 그 배열을 다시 저장한다.
   toDos = toDos.filter( toDo => toDo.id !== parseInt(li.id))
   saveToDos()
}


function paintToDo(newToDo){
    //리스트 태그를 만들고 그 안에 스팬태그를 넣어보자!! 
   const li = document.createElement("li");
   // 고유 아이디 부여 
   li.id = newToDo.id
   const span = document.createElement("span");
   span.innerText = newToDo.text
   
   // 삭제 버튼 만들기
   const button = document.createElement("button");
   button.innerText = "❌"
   button.addEventListener("click", deleteToDo)
   li.appendChild(span);
   li.appendChild(button)
    //삭제 버튼 끝 
   toDoList.appendChild(li)
}

function handleToDoSubmit(event){
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   //서밋되고 나서 입력되는 벨류를 배열에 넣기!! 
   const newTodoObj = {
       text: newTodo,
       //랜던 아이디 부여하기
       id: Date.now(),
   }
   //배열에 객체 저장하기
   toDos.push(newTodoObj)
   //HTML 전달도 객체를 전달한다.
   paintToDo(newTodoObj);
   saveToDos()
}  

toDoForm.addEventListener("submit", handleToDoSubmit)


//로컬스토리지에 저장된거 가져오기 
const savedToDos = localStorage.getItem(TODOS_KEY)

//저장된 자료가 있으면 함수 작동하기 
if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    // 자료 지속적으로 저장하기 
    toDos = parsedTodos
    //배열 요소마다 함수를 적용 시킬수 있다.
    parsedTodos.forEach(paintToDo)
}




