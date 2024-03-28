// function addTask() {
//     var taskInput = document.getElementById('taskInput');
//     var taskText = taskInput.value.trim();
//     if (taskText === '') return;

//     var listItem = document.createElement('li');
//     listItem.textContent = taskText;

//     var pendingTasks = document.getElementById('pendingTasks');
//     pendingTasks.appendChild(listItem);

//     taskInput.value = '';

//     listItem.addEventListener('click', function() {
//         if (!listItem.classList.contains('completed')) {
//             listItem.classList.add('completed');
//             var completedTasks = document.getElementById('completedTasks');
//             completedTasks.appendChild(listItem);
//         } else {
//             listItem.classList.remove('completed');
//             pendingTasks.appendChild(listItem);
//         }
//     });

//     listItem.addEventListener('contextmenu', function(event) {
//         event.preventDefault();
//         listItem.remove();
//     });
// }

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText === '') return;

    var listItem = document.createElement('li');
    listItem.textContent = taskText;

    var pendingTasks = document.getElementById('pendingTasks');
    pendingTasks.appendChild(listItem);

    taskInput.value = '';

    var completeButton = document.createElement('button');
    completeButton.textContent = 'Task Completed';
    listItem.appendChild(completeButton);

    completeButton.addEventListener('click', function() {
        listItem.classList.add('completed');
        var completedTasks = document.getElementById('completedTasks');
        completedTasks.appendChild(listItem);
        listItem.removeChild(completeButton);
    });

    listItem.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        listItem.remove();
    });
}
