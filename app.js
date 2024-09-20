// console.log("hello world!")

var input = document.querySelector("#input")
var ol = document.querySelector("ol")
var globalArr = []

function renderTodo(){
    ol.innerHTML = ""
    for(var i = 0; i < globalArr.length; i++){
        console.log(globalArr[i] , i)
        ol.innerHTML += `<li>${globalArr[i]}
        <button onclick="deleteTodo(${i})">Delete</button>
        <button onclick="editTodo(${i})">Edit</button>
        </li>` 
}
}

function todoApp(){
ol.innerHTML = ""    
globalArr.push(input.value)
// console.log(globalArr)
renderTodo()
input.value = ""
}



function deleteTodo(index){
    console.log("todo deleted" , index)
    globalArr.splice(index,1)
    console.log(globalArr)
    renderTodo()
}



function editTodo(index){
    console.log("todo edited", index)
    var updatedVal=prompt("enter to edit the value")
    globalArr.splice(index , 1 , updatedVal)
    console.log(globalArr)
    renderTodo()
}