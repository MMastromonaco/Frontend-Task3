const form = document.querySelector('#search-form');
const input = document.querySelector('#list-input');
const list = document.querySelector('#generated-List');
const checked = document.querySelector('#Checkbox')
const checkAll = document.querySelector('#checkbox-all');
const showAll = document.querySelector('#show-all');
const showActive = document.querySelector('#show-active');
const showCompleted = document.querySelector('#show-completed');
const showbuttons = document.querySelector(".button-container");
const clearCompleted = document.querySelector('#clear-completed');
const itemsCounter = document.querySelector('#items-counter');

//testade att lägga detta i en function som kallades på.
//funkar inte men tror det kan bero på handhavandefel
function hideButtons() {
  showbuttons.classList.add("hidden")
  checkAll.classList.add("hidden")
}
//samma här då de alltid syns efter första tasken lagts till.
function showButtons() {
  showbuttons.classList.remove("hidden")
  clearCompleted.classList.add("hidden")
  checkAll.classList.remove("hidden")
}

function taskAmount() {
  let amount = list.childElementCount;
  document.getElementById("amount").innerText = amount;
}

hideButtons();

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputValue = input.value;
  if (inputValue === '') {
    alert('Skriv något!');
    return;
  }
  //Skappa en p tagg även!
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change',(event =>{
    if (event.target.checked) {
    clearCompleted.classList.remove("hidden")
    listItem.style.color = "red";
    }
    else{
    clearCompleted.classList.add("hidden")
    listItem.style.color = "blue";

    }
  }))
  const taskText = document.createTextNode(inputValue);
  const deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.value = '❌';
  deleteButton.addEventListener('click', function () {
    listItem.remove();
    if (list.childElementCount === 0) {
      hideButtons();
    }
    taskAmount();


  });
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
  input.value = '';
  showButtons();
  taskAmount();
});

checkAll.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let counter = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      counter++;
    }
  }
  if (counter === checkboxes.length) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  }
});


//https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
//Tittade på länken ovan för att förstå hur man displayade
//något baserat på iklickad checkbox.
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
//samt den.

showAll.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].parentElement.style.display = 'block';
  }
});

showActive.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === false) {
      checkboxes[i].parentElement.style.display = 'block';
    } else {
      checkboxes[i].parentElement.style.display = 'none';
    }
  }
});

showCompleted.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      checkboxes[i].parentElement.style.display = 'block';
    } else {
      checkboxes[i].parentElement.style.display = 'none';
    }
  }
});

clearCompleted.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let tasksLeft = checkboxes.length;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      checkboxes[i].parentElement.remove();
    }
  }
  if (list.childElementCount === 0) {
    hideButtons();
  }
  taskAmount();

});


