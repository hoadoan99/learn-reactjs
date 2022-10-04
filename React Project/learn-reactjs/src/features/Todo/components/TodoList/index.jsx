/** @format */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onToDoClick: PropTypes.func,
};
TodoList.prototype.default = {
  todoList: [],
  onToDoClick: null,
};

function TodoList({ todoList, onToDoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onToDoClick) return;
    onToDoClick(todo, idx);
  };
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, idx) => {
          return (
            <li
              key={todo.id}
              className={classnames({
                "todo-list__item": true,
                completed: todo.status === "completed",
              })}
              onClick={() => handleTodoClick(todo, idx)}>
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
