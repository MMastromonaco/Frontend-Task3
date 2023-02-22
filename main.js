let form = document.querySelector('form');
let input = document.querySelector('#search-input');

// Hämtat från:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
// https://stackoverflow.com/questions/69614654/submitform-when-pressing-enter-to-do-list
form.addEventListener('keypress', e => {
    function keypress (e){
        e.preventDefault()
        if (e.key === 'Enter' || e.keyCode === 13) {
            submitForm();
        }
    }
})

// Hämtat från:
// https://www.w3schools.com/howto/howto_js_todolist.asp
function createTodo() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("list-input").value;
    let frase = document.createTextNode(inputValue);
    li.appendChild(frase);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else
    {
        document.getElementById("generated-list").appendChild(li);
    }
    document.getElementById("list-input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    }
};