document.addEventListener("DOMContentLoaded", () => {
  // your code here

//Select Form:
const form = document.querySelector("#create-task-form");

//Select Task List to display task:
const taskList = document.querySelector('#tasks');

//Add event listener to submit form with preventDefault
form.addEventListener("submit", (event) => {
  event.preventDefault()
  
  //to get user input from the box with name new-task-description
  const inputNewTask = document.querySelector("#new-task-description").value
   
  //pass input task
  buildToDo(inputNewTask,event)

});

//add input task to list and display
function buildToDo(inputNewTask) {

  const list = document.createElement('li')
  list.textContent = inputNewTask
 
  //add list to task list
  taskList.append(list)
}

});



