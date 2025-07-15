import React, { useState } from 'react'
import { TODO_CATEGORY_ICON } from '@/constants/icon';
import IconButton from '../ui/IconButton';
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal';
import TodoForm from './TodoForm';


// TodoBody에서 todo라는 이름의 props를 전달(내려줬음)
const TodoItem = ({ todo, onUpdate }) => {

  const [openModal, open] = useState(false);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <span className="text-lg font-medium text-gray-300">{ TODO_CATEGORY_ICON[todo.category] }</span>
            <div>
                <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{ todo.title }</h2>
                <p className="mt-2 text-base text-gray-200">{ todo.summary }</p>
            </div>
        </div>
        <div className="flex items-center gap-1">
            <IconButton 
              onClick={()=>open(true)} icon={'✏️'}/>
            <IconButton icon={'🗑'} />
        </div>
        {openModal && createPortal(
          <Modal onClose={()=>open(false)}>
            <TodoForm 
              actionTitle={'수정'} 
              buttonText={'Update'} 
              onAction={onUpdate} 
              onClose={()=>open(false)}
              todo={todo} 
            />
          </Modal>, document.body
        )}
    </li>
    
  )
}
export default TodoItem