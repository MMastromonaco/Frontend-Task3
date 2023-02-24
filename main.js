const form = document.querySelector('#search-form');
const input = document.querySelector('#list-input');
const list = document.querySelector('#generated-List');
const checkAll = document.querySelector('#checkbox-all');

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
  });
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
  input.value = '';

  if(list.childNodes.length > 0) {
    checkAll.classList.remove('hidden');
  }
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

function hideCheckboxAll() {
  if(list.childNodes.length === 0) {
    checkAll.classList.add('hidden');
  }
};