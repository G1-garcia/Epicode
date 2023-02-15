const newTask = document.getElementById('newTask');
const addTask = document.getElementById('addTask');
const list = document.getElementById('list');

var aggiungi = function(){
    var task = newTask.value;
    var li = document.createElement('li');
      li.innerHTML = task;
      list.appendChild('li');
      newTask = '';
}

addEventListener('click', aggiungi())