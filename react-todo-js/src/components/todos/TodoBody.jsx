// rafce
import React from 'react'
import TodoItem from './TodoItem'

// 하나의 할일을 가진 TodoItem이라는 이름의 컴포넌트를 작성해서 
// TodoBody 내부에서 렌더링

const TodoBody = ({ todos, onUpdate }) => {
  return (
    <ul>
        {/* <TodoItem />으로 렌더링할 수 있게*/}
        {todos.map(todo => 
          <TodoItem 
            onUpdate={onUpdate} 
            todo={todo} 
            key={todo.id} />)}
    </ul>
  )
}

export default TodoBody