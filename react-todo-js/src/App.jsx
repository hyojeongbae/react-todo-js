// App이라는 이름의 함수형 컴포넌트

import { useState } from "react"
import TodoBody from "./components/todos/TodoBody"
import TodoHeader from "./components/todos/TodoHeader"
import DefaultLayout from "./layouts/DefaultLayout"

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

function App() {

  const [todos, setTodos] = useState(dummyTodos);

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

  return (
      <DefaultLayout>
        <header>
              <h1 className='pt-8 mx-auto text-red-200 max-w-max text-7xl'>
                <img className='ml-4' src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png" alt="Thought Balloon" width="75" height="75" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png" alt="Seal" width="75" height="75" />
                </h1>
        </header>

        <section className='max-w-xl m-4 mx-auto'>
          <TodoHeader onAdd={addTodoHandler}/>

          {/* 할일 목록 */}
          <TodoBody 
            todos={todos} 
            onUpdate={updateTodoHandler} />
        </section>
      </DefaultLayout>
  )
}

export default App
