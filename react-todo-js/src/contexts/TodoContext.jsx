import { createContext, useContext, useState } from "react";

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]


const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(dummyTodos);
    const [selectedCategory, setFilter] = useState('ALL');
    
    const addTodoHandler = (todo) => {
    const newTodo = {
      id: self.crypto.randomUUID(),
      ...todo
    }

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

    const updateTodoHandler = (updateTodo) => {
        const updatedTodos = todos.map(todo => todo.id === updateTodo.id ? updateTodo : todo);
        setTodos(updatedTodos);
    }

    const deleteTodoHandler = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    const updateCategoryHandler = (id, updatedCategory) => {
        const updatedTodos = todos.map(
        todo => todo.id === id ? {...todo, category: updatedCategory} : todo);
        setTodos(updatedTodos);
    }

    const filterTodos = () => {
        return (
        selectedCategory === 'ALL' ? todos : todos.filter(
        todo => selectedCategory === todo.category));
    }

    const filteredTodos = filterTodos();

    return (
        <TodoContext.Provider value = {{
        todos: filteredTodos,
        allTodos: todos,
        selectedCategory,
        setFilter,
        addTodoHandler,
        updateCategoryHandler,
        updateTodoHandler,
        deleteTodoHandler
    }}>
        {children}
    </TodoContext.Provider>

    )
}