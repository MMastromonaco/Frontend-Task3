const form = document.querySelector('#search-form');
const input = document.querySelector('#list-input');
const list = document.querySelector('#generated-List');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputValue = input.value;
  if (inputValue === '') {
    alert('skriv något!');
    return;
  }
  const listItem = document.createElement('li');
  const taskText = document.createTextNode(inputValue);
  listItem.appendChild(taskText);
  list.appendChild(listItem);
  input.value = '';
});