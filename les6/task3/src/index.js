import { initTodoListHandlers } from './scripts/todoList.js';
import { renderTasks } from './scripts/renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key !== 'tasksList') {
    return;
  }
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
