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