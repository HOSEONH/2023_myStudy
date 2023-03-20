const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);

function todoAdd(e) {
    e.preventDefault();

    const todoValue = todoForm.firstElementChild.value;
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerText = "지울래"
    const time = document.createElement("span");
    time.innetHTML = getClock();

    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time);
    li.appendChild(button);

    document.querySelector("#todo-list").appendChild(li);
    todoForm.firstElementChild.value = "";
    check.addEventListener("click", todoCheck);
    button.addEventListener("click", todoDelete);
}
function todoCheck(e) {
    const check = e.target;
    const li = check.parentNode;

    // 이 부분 다시 보여달라고 하기 !! if말고 어떤 걸로 했는지 
    if(check.checked){
        li.style.color = "gray";
        li.style.textDecoration = "line-through";
    } else {
        li.style.color = "";
        li.style.textDecoration = "";
    }
}

function todoDelete(e) {
    let button = e.target;
    let li = button.parentNode;
    li.remove("check");
}
function getClock() {
    let date = new Date(); 
    let hour = String(date.getHours()).padStart(2, "0"); 
    let minute = String(date.getMinutes()).padStart(2, "0");
    let second = String(date.getSeconds()).padStart(2, "0");

    return `${hour}:${minute}:${second}`; 
}

setInterval(function(){
    clock.innerHTML = getClock();
}, 1000);