document.addEventListener('DOMContentLoaded',()=>{
    const taskInput= document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    //Fucntions to add a new Task
    //CURD= Create updte rd and Dlt operation
    function addTask() {
        const taskText = taskInput.value.trim();
        if(taskText !== ''){
            const li = document.createElement('li');

            const span= document.createElement('span');
            span.textContent=taskText;

            const actions = document.createElement('div');
            actions.className='actions';

            const editButton = document.createElement('button');
            editButton.className = 'edit-btn';
            editButton.textContent = 'Edit';
            editButton.addEventListener('click',() => editTask(li));

            const completeButton = document.createElement('button');
            completeButton.className = 'complete-btn';
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click',() => toggleCompleteTask(li));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click',() => removeTask(li));

            actions.appendChild(editButton);
            actions.appendChild(completeButton);
            actions.appendChild(deleteButton);

            li.appendChild(span);
            li.appendChild(actions);

            taskList.appendChild(li);
            taskInput.value='';
        }
    }

    function removeTask(taskElement){
        taskList.removeChild(taskElement);
    }
    function toggleCompleteTask(taskElement){
        taskElement.classList.toggle('completed');
    }

    function editTask(tasktElement){
        const span = tasktElement.querySelector('span');
        const newTaskText = prompt('Edit your task:', span.textContent);
        if(newTaskText !== null && newTaskText.trim() !== ''){
            span.textContent=newTaskText.trim();
        }
        }
    //Event Listener to add task
    addTaskButton.addEventListener('click',addTask)

    taskInput.addEventListener('keydown',(event) =>{
        if(event.key == 'Enter'){
            addTask();
        }
    });
});