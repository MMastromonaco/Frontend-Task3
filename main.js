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

checkAll.addEventListener('click', function () {
  event.preventDefault();
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    // Count the number of checked checkboxes. If it is less than max amount of boxes checked, mark everyone checked. Else (If all already is checked), uncheck everyone.
    let counter = 0;
    for(let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked = true) {
          counter++;
        }
        if (checkboxes[i].checked = false) {
          checkboxes[i].checked = true;
        }
        if (counter === checkboxes.length) {
          checkboxes[i].checked = false;
        }
    }
});

function hideCheckboxAll() {
  if(list.childNodes.length === 0) {
    checkAll.classList.add('hidden');
  }
};