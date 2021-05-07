/*
  Students Tasks:
  [1] Use Sweet Alert If Input Is Empty
  [2] Check If Task Is Exist
  [3] Create Delete All Tasks Button
  [4] Create Finish All Tasks Button
  [5] Add To Tasks To The Local Storage
*/

// Setting Up the variables

let theInput = document.querySelector(".add-task input");

let theAddButton = document.querySelector(".add-task .plus");

let tasksContainer = document.querySelector(".tasks-content");

let theNoTaskMsg = document.querySelector(".tasks-content .no-tasks-message");

let tasksCount = document.querySelector(".task-count span");

let tasksCompleted = document.querySelector(".task-completed span");

//Focus on input field
window.onload = function() {

  theInput.focus();

}

//Adding the task
theAddButton.onclick = function() {




  // if the field is empty
  if (theInput.value === '') {


    console.log("the input is full of text");

  } else {

    let theNoTaskMsg = document.querySelector(".tasks-content .no-tasks-message");

    if (document.body.contains(document.querySelector(".no-tasks-message"))) {

      //Remove tasks message
      theNoTaskMsg.remove();

    }


    // create span element
    let mainSpan = document.createElement("span");

    // create a delete Button
    let deleteBtn = document.createElement("span");

    //create text for Input
    let mainText = document.createTextNode(theInput.value);

    //create text for Delete Button
    let deletText = document.createTextNode("Delete");

    //Associate the text with the spans
    mainSpan.appendChild(mainText);
    deleteBtn.appendChild(deletText);

    // Add class to both
    mainSpan.classList.add("task-box");
    deleteBtn.classList.add("delete");

    //Append the delete to the main and span to the body
    mainSpan.appendChild(deleteBtn);
    tasksContainer.appendChild(mainSpan);



    //EMpty the Input and focus another time

    theInput.value = '';

    theInput.focus();


  }
  // Count how much task have been completed
  allTasks();

  // check answer
  checkTask();

};


document.addEventListener("click", function(e) {

  if (e.target.className == 'delete') {

    // Remove current Task
    e.target.parentNode.remove();

    if (tasksContainer.childElementCount == 0) {

      createNoTasks();

    }

  }

  if (e.target.classList.contains("task-box")) {

    // toggle class finished
    e.target.classList.toggle("finished");


  }

  allTasks();

});

// Function create no tasks message

function createNoTasks() {

  // create span
  let msgSpan = document.createElement("span");

  //create text Node
  let textMsg = document.createTextNode("No tasks to show");

  //Append the text with the span
  msgSpan.appendChild(textMsg);

  // add class to the msg span
  msgSpan.className = "no-tasks-message";

  //append the msg span to the parent
  tasksContainer.appendChild(msgSpan);


}


// function to calculate task
function allTasks() {

  tasksCount.innerHTML = document.querySelectorAll(".task-box").length;

  tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;

}

// function check if task already Exist
function checkTask() {

  let existingTasks = Array.from(document.querySelectorAll(".task-box"));

  let slicedTasks = existingTasks.slice(0, -1);

  let lastChild = tasksContainer.lastElementChild;

  let lastChildText = lastChild.textContent;

  let emptyArray = [];

  for (var i = 0; i < slicedTasks.length; i++) {

    let s = slicedTasks[i].textContent;

    emptyArray[i] = s;

  };

  let search = emptyArray.indexOf(lastChildText);
  
  if (search !== -1) {

    alert("This Task already exist");

    lastChild.remove();

  }

}
