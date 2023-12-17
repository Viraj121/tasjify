import "./App.css";
import React, { useState } from "react";
import InputField from "./components/InputField";
// import Mybutton from "./components/Mybutton";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <>
      <div className="App">
        {/* <Mybutton onClick={()=>alert("nicee you clicked!")}text="click me👇" /> */}
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}/>
        
      </div>
    </>
  );
};

export default App;
