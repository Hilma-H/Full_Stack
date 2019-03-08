import React from 'react';
// import reducer from '../reducers/anecdoteReducer'

// const anecdotes = props.store.getState()

const createAnecdote = (content) => {
    return {
      type: 'NEW',
      data: content
    }
}
const createdMessage= (content) => {
  return {
    type: 'ADDED',
    data: content
  }
}
const remove = () => {
  return {
    type: 'REMOVE'
  }
}

const Anecdotes = ({store}) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const element = event.target
    const content = element.new.value
    store.dispatch(
      createAnecdote(content)
    )
    store.dispatch(
      createdMessage(content)
    )
    setTimeout( () => {
      store.dispatch(
        remove()
      )
    }, 5000)
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


  

    


      