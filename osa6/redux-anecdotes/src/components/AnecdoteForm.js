import React from 'react';
// import reducer from '../reducers/anecdoteReducer'

// const anecdotes = props.store.getState()

const createAnecdote = (content) => {
    return {
      type: 'NEW_NOTE',
      data:content
    }
}

const Anecdotes = ({store}) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    store.dispatch(
      createAnecdote(event.target.new.value)
    )
    event.target.new.value = ''
  }  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="new" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}
export default Anecdotes


  

    


      