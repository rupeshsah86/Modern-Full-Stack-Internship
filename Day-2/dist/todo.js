"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create the empty array
const tasks = [];
function addTask(task) {
    // only when there is no duplicate task
    const duplicateTask = tasks.find((elem) => {
        return elem.id === task.id;
    });
    if (duplicateTask) {
        console.log("Task already exists");
        return;
    }
    tasks.push(task);
    console.log("Task added successfully");
}
function showTasks() {
    // when tasks array is not empty --> show all Tasks
    if (tasks.length === 0) {
        console.log("No tasks exist");
        return;
    }
    console.log("--------------------TASKS are ----------------");
    tasks.forEach((task) => {
        console.log(`TITLE: ${task.title}\n`, `ID: ${task.id}\n`, `IS_COMPLETED: ${task.isCompleted}\n`, `PRIORITY: ${task.priority}\n`);
    });
}
function deleteTask(id) {
    // filter method in order to remove the task
    const updatedTasks = tasks.filter((elem) => {
        return elem.id !== id;
    });
    // if the task is not deleted
    // if original array and updatedArray length is same, no task deleted
    if (tasks.length === updatedTasks.length) {
        console.log("Task can not be deleted.");
        return;
    }
    tasks.length = 0;
    tasks.push(...updatedTasks);
    console.log("Task has deleted successfully");
}
function searchTaskwithId(id) {
    // use find function
    const searchedTask = tasks.find((task) => {
        return task.id === id;
    });
    return searchedTask;
}
// update Task
function updateTask(task) {
    // find task with the Task receiving in parameter
    const taskToUpdate = tasks.find((elem) => {
        return elem.id === task.id;
    });
    if (taskToUpdate) {
        taskToUpdate.id = task.id;
        taskToUpdate.title = task.title;
        taskToUpdate.isCompleted = task.isCompleted;
        taskToUpdate.priority = task.priority;
        console.log("Task updated successfully!");
    }
}
const task1 = {
    title: "Learn Typescript",
    id: 1,
    isCompleted: true,
    priority: "High",
};
const task2 = {
    title: "Learn Javascript",
    id: 2,
    isCompleted: true,
    priority: "Medium",
};
const task3 = {
    title: "Learn NodeJs",
    id: 3,
    isCompleted: false,
    priority: "Low",
};
const task4 = {
    title: "Learn ReactJs",
    id: 4,
    isCompleted: false,
    priority: "Medium",
};
addTask(task1);
addTask(task2);
addTask(task3);
addTask(task4);
showTasks();
deleteTask(1);
console.log("Tasks afte deletion: ", tasks);
// searchedTasks
const searchedTask = searchTaskwithId(4);
console.log(searchedTask);
const objToUpdate = {
    id: 4,
    title: "Learn NextJS",
    isCompleted: false,
    priority: "High",
};
updateTask(objToUpdate);
console.log("Updated Tasks: ", tasks);
//# sourceMappingURL=todo.js.map