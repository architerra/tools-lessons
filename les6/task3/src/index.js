// import 'core-js';
import { initTodoListHandlers } from './scripts/todoList.js';
import { renderTasks } from './scripts/renderer.js';
import { getTasksList } from './scripts/tasksGateway.js';
import { setItem } from './scripts/storage.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(taskList => {
    setItem('taskList', taskList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key !== 'tasksList') {
    return;
  }
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
