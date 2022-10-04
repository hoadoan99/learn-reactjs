/** @format */
import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initDataTodo = [
    { id: 1, title: "Eat", status: "new" },
    { id: 2, title: "Sleep", status: "completed" },
    { id: 3, title: "Code", status: "new" },
    { id: 4, title: "Game", status: "completed" },
  ];
  const [todoList, setTodoList] = useState(initDataTodo);
  const [showTodoListFilter, setShowTodoListFilter] = useState("all");
  const handleTodoClick = (todo, index) => {
    console.log(todo.status, index);
    let newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
    console.log(newTodoList);
  };
  const showAllTodoClick = () => {
    setShowTodoListFilter("all");
  };
  const showCompletedTodoClick = () => {
    setShowTodoListFilter("completed");
  };
  const showNewTodoClick = () => {
    setShowTodoListFilter("new");
  };
  const dataFilterTodoList = todoList.filter(
    (todo) => showTodoListFilter === "all" || showTodoListFilter === todo.status
  );
  return (
    <div>
      <TodoList todoList={dataFilterTodoList} onToDoClick={handleTodoClick} />
      <button onClick={showAllTodoClick}>Show All Todo-List</button>
      <button onClick={showCompletedTodoClick}>Show Completed Todo-List</button>
      <button onClick={showNewTodoClick}>Show New Todo-List</button>
    </div>
  );
}

export default TodoFeature;
