import React, { useState, useEffect, useRef } from 'react'

function TodoForm(Props) {
  const [input, setInput] = useState('')

  const handelSubmit = (e) => {
    e.preventDefault();
    Props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });

    setInput('')
  }

  const inputRef = useRef('null')

  useEffect(() => {
    inputRef.current.focus()
  })

  const handelChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form className='todo-form' onSubmit={handelSubmit}>
      {Props.edit ? (
        <>
          <input
            type='text'
            placeholder='Update item'
            value={input}
            className='todo-input'
            onChange={handelChange}
            ref={inputRef}
          >
          </input>
          <button className='todo-button edit'>Update</button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Add todo'
            value={input}
            className='todo-input edit'
            onChange={handelChange}
            ref={inputRef}
          >
          </input>
          <button className='todo-button'>Add todo</button>
        </>
      )}

    </form>
  )
}

export default TodoForm