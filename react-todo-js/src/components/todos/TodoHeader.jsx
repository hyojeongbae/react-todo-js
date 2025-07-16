import React, { useState } from 'react'
import TodoFilter from './TodoFilter'
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal';
import TodoForm from './TodoForm';
import { useTodoContext } from '../../contexts/TodoContext';

const TodoHeader = () => {

  const {selectedCategory, setFilter} = useTodoContext();
  const [openModal, open] = useState(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button onClick={() => open(true)} className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
              data-cy="add-todo-button">Add Todo
      </button>

      {openModal && createPortal(
        <Modal onClose={()=>open(false)}>
          <TodoForm 
            buttonText={'Add'} 
            actionTitle={'등록'}  
            onClose={()=>open(false)}/>
        </Modal>, document.body
      )}

      <TodoFilter category={selectedCategory} onFilter={setFilter} />
    </div>
  )
}

export default TodoHeader