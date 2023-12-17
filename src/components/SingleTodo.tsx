import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todo__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />

          <AiFillDelete />

          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
