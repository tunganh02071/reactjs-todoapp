import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*s/.test(todo.text)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo, index) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updateTodo);
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*s/.test(newValue.text)) {
      return;
    }
    setTodos(prev =>prev.map((item) => (item.id === todoId ? newValue : item)))
  }
  const removeTodo = (id) => {
    const removeArray = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArray);
  }

  return (
    <div>
      <h1>What's your plan?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
      todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList