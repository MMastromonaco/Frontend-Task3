const form = document.querySelector('#search-form');
const input = document.querySelector('#list-input');
const list = document.querySelector('#generated-List');
const checkAll = document.querySelector('#checkbox-all');
const showAll = document.querySelector('#show-all');
const showActive = document.querySelector('#show-active');
const showCompleted = document.querySelector('#show-completed');
const clearCompleted = document.querySelector('#clear-completed');
const itemsCounter = document.querySelector('#items-counter');

//testade att lägga detta i en function som kallades på.
//funkar inte men tror det kan bero på handhavandefel
function hideButtons() {
  checkAll.classList.add('hidden');
  showAll.classList.add('hidden');
  showActive.classList.add('hidden');
  showCompleted.classList.add('hidden');
  itemsCounter.classList.add('hidden');
}
//samma här då de alltid syns efter första tasken lagts till.
function showButtons() {
  checkAll.classList.remove('hidden');
  showAll.classList.remove('hidden');
  showActive.classList.remove('hidden');
  showCompleted.classList.remove('hidden');
  itemsCounter.classList.remove('hidden');
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputValue = input.value;
  if (inputValue === '') {
    alert('Skriv något!');
    return;
  }
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const taskText = document.createTextNode(inputValue);
  const deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.value = '❌';
  deleteButton.addEventListener('click', function() {
    listItem.remove();
    if(list.childNodes.length === 0) {
      hideButtons();
    }
    updateRemainingTasks();
  });
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
  input.value = '';
  showButtons();
  updateRemainingTasks();
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
      clearCompleted.classList.add('hidden');
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
      clearCompleted.classList.remove('hidden');
    }
  }
});

list.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let counter = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      clearCompleted.classList.remove('hidden');
    }
  }
});

// function hideCheckboxAll() {
//   if(list.childNodes.length === 0) {
//     checkAll.classList.add('hidden');
//   }
// };

function updateRemainingTasks() {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let activeCount = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === false) {
      activeCount++;
    }
  }
  itemsCounter.textContent = activeCount + ' items left';
  
  let completedCount = checkboxes.length - activeCount;
  if (completedCount > 0) {
    clearCompleted.classList.remove('hidden');
  } else {
    clearCompleted.classList.add('hidden');
  }
};

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


//Har bråkat med denna. Den vill inte fungera,
//knappen syns inte och jag fattar fan noll.
clearCompleted.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      checkboxes[i].parentElement.remove();
    }
  }
  hideCheckboxAll();
});
