function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;
  if (task === "") return;

  var li = document.createElement("li");
  li.innerText = task;
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
