const listElements = document.querySelectorAll("li");


// Part One
let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');
let clearBtn = document.querySelector('#clearAll');
let alertBox = document.querySelector('.alert');
let alertBoxBtn = document.querySelector('.close');

button.addEventListener('click', addTodo);
clearBtn.addEventListener('click', clearFinishedTodos);
alertBoxBtn.addEventListener('click', closeAlertBox);

function addTodo() {
  if(input.value === '') return;
  let li = document.createElement('li');
  li.innerText = input.value;
  li.classList.add('todo');
  console.log(checkForDuplicates(li));
  if(checkForDuplicates(li)) {
    alertBox.style.display = 'block';
    input.value = '';
  } else {
    //li.addEventListener('click', toggleDone);
    li.appendChild(createDeleteButton());
    ul.appendChild(li);
    input.value = "";
  }
  clearBtn.style.display = 'block';
}

// Creates a span which is used a delete button to remove
// the li from the list.
function createDeleteButton() {
  let btn = document.createElement('span');
  btn.innerText = 'X';
  btn.classList.add('deleteTodo', 'btn', 'btn-outline-danger', 'btn-sm');
  btn.addEventListener('click', deleteTodo);
  return btn;
}

// Part Two
function checkForDuplicates(todo) {
  const listElements = document.querySelectorAll("li");
  const listElementsArray = Array.from(listElements);
  let duplicate = false;
  listElementsArray.forEach(function(liElement) {
    
    if(liElement.textContent.substring(0, liElement.textContent.length - 1).toLowerCase() === todo.innerText.toLowerCase()) {
      duplicate = true;
    }  
  })
  return duplicate;
}

//Part 3a
function toggleDone(event) {
  if(event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

//Part 3c
function clearFinishedTodos() {
  const listElements = document.querySelectorAll("li");
  const listElementsArray = Array.from(listElements);
  listElementsArray.forEach(function(liElement) {
    
      liElement.remove();
    
  })
  clearBtn.style.display = 'none';
}

//Part 3d
/* let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearFinishedTodos); */

// Delete Todo function
function deleteTodo(event) {
  event.target.parentNode.remove();
  const listElements = document.querySelectorAll("li");
  if(listElements.length === 0) {
    clearBtn.style.display = 'none';
  }
}

function closeAlertBox() {
  alertBox.style.display = 'none';
}

function showAlertBox() {
  alertBox.style.display = 'block';
}


