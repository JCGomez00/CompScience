//all my variables

var todo = document.getElementById('todo'),
  form = document.getElementById('form'),
  field = document.getElementById('field'),
  deleteAll = document.getElementById('deleteAll');


//this os the submit butoon

form.addEventListener('submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  field.value = "";
  evt.preventDefault();
}, false);

//this is the info list

todo.addEventListener('click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);

//my delete all button deletes all info on the to do page
deleteAll.addEventListener('click', function(evt) {
  todo.innerHTML = "";
  evt.preventDefault();
});
