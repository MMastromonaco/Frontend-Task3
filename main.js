const form = document.querySelector('#search-form');
const input = document.querySelector('#list-input');
const list = document.querySelector('#generated-List');

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
});