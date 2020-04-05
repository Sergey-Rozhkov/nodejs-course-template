const tasks = [];

const createTask = async task => {
  await tasks.push(task);
  return task;
};

const getTasksByBoardId = async boardId => {
  return tasks.filter(item => item.boardId === boardId);
};

module.exports = { createTask, getTasksByBoardId };
