export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newTask = true; // declare a new block-scoped variable
    const newTask2 = false; // declare a new block-scoped variable
  }

  return [task, task2];
}
