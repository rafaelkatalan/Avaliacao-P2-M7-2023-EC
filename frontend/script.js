function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const newTaskItem = document.createElement("li");

    // Criar elemento de texto da tarefa
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    newTaskItem.appendChild(taskTextElement);

    // Botão para excluir a tarefa
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(newTaskItem);
    });

    newTaskItem.appendChild(deleteButton);

    // Adicionar a nova tarefa à lista
    taskList.appendChild(newTaskItem);

    // Limpar o campo de entrada
    taskInput.value = "";
  }
}

function getTasks() {
  const taskList = document.getElementById("taskList");
  //Limpa a lista
  taskList.innerHTML = "";
  fetch("http://localhost:8000/notes")
    .then((response) => response.json())
    .then((data) => {
      data["data"].forEach((task) => {
        const newTaskItem = document.createElement("li");

        // Criar elemento de texto da tarefa
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = `${task[1]} : ${task[2]}  `;
        newTaskItem.appendChild(taskTextElement);

        // Botão para excluir a tarefa
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.addEventListener("click", function () {
          taskList.removeChild(newTaskItem);
        });

        newTaskItem.appendChild(deleteButton);

        // Adicionar a nova tarefa à lista
        taskList.appendChild(newTaskItem);
      });
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
