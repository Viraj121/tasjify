import React from "react";
import "./style.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
