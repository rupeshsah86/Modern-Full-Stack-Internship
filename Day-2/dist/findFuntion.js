"use strict";
// find function in js
Object.defineProperty(exports, "__esModule", { value: true });
const tasks = [
    {
        id: 1,
        title: "Javascript",
        isCompleted: false,
    },
    {
        id: 2,
        title: "ReactJs",
        isCompleted: false,
    },
    {
        id: 3,
        title: "NextJs",
        isCompleted: false,
    },
];
function searchTask(id) {
    // search for the task with matching id
    const task = tasks.find((elem, index) => {
        return elem.id === id;
    });
    if (!task) {
        console.log("No Task Found");
    }
    return task;
}
const output = searchTask(2);
//modifying the output task
if (output) {
    output.title = "Learning Typescript";
    console.log("searched task: ", output);
    console.log("original task: ", tasks);
}
else {
    console.log("Task not found");
}
//# sourceMappingURL=findFuntion.js.map