document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
    updateCounters();
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    const taskTextContainer = document.createElement('div');
    const taskContent = document.createElement('span');
    const timestamp = document.createElement('div');

    taskTextContainer.className = 'task-text-container';
    taskContent.className = 'task-text';
    taskContent.textContent = taskText;
    timestamp.className = 'timestamp';
    timestamp.textContent = 'Added: ' + new Date().toLocaleString();

    taskTextContainer.appendChild(taskContent);
    taskItem.appendChild(taskTextContainer);
    taskItem.appendChild(timestamp);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Finish';
    completeButton.addEventListener('click', function() {
        completeTask(taskItem);
        updateCounters();
    });

    taskTextContainer.appendChild(completeButton);
    taskList.appendChild(taskItem);
}

function completeTask(taskItem) {
    const completedTaskList = document.getElementById('completed-task-list');
    taskItem.classList.add('completed');

    const completionTimestamp = document.createElement('div');
    completionTimestamp.className = 'timestamp';
    completionTimestamp.textContent = 'Completed: ' + new Date().toLocaleString();

    taskItem.appendChild(completionTimestamp);
    taskItem.querySelector('.task-text-container button').remove();

    completedTaskList.appendChild(taskItem);
}

function updateCounters() {
    const taskCount = document.getElementById('task-list').children.length;
    const completedTaskCount = document.getElementById('completed-task-list').children.length;

    document.getElementById('task-count').textContent = taskCount;
    document.getElementById('completed-task-count').textContent = completedTaskCount;
}

document.addEventListener('DOMContentLoaded', updateCounters);
