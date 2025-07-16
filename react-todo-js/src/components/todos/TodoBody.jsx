// rafce
import React from 'react'
import TodoItem from './TodoItem'
import { useTodoContext } from '../../contexts/TodoContext'

// 하나의 할일을 가진 TodoItem이라는 이름의 컴포넌트를 작성해서 
// TodoBody 내부에서 렌더링

const TodoBody = () => {

  const {todos, deleteTodoHandler, updateTodoHandler, updateCategoryHandler} = useTodoContext();
  return (
    <ul>
        {todos.map(todo => 
          <TodoItem
            onDelete={deleteTodoHandler} 
            onUpdate={updateTodoHandler} 
            onChange={updateCategoryHandler}
            todo={todo} 
            key={todo.id} 
            />
          )}
    </ul>
  )
}

export default TodoBody