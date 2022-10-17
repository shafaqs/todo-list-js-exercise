// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function(){
      console.log("I'm here: ",this.complete);
      this.complete = true;
      console.log("Checked again: ",this.complete)
    },
    logState: function(){
      console.log("Lets check the state: ",this.complete)
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed






// const task1 = newTask("Clean Cat litter", "take all 💩 out of the litter box");
// const task2 = newTask("D0 Laundry", "😨");
// const tasks = [task1, task2];
// console.log(tasks);





// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
