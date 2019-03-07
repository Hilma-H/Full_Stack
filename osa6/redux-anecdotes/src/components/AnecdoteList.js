import React from 'react';
// import reducer from '../reducers/anecdoteReducer'

//const store = createStore(reducer)

const voting = (id) => {
      return {
        type: 'VOTE',
        id: id
      }
    }

const AnecdotesList = ({store}) => {
    const anecdotes = store.getState()
    const vote = (id) => {
    console.log('vote', id)
    store.dispatch(
      voting(id)
    )
    }
    
    return (
    <div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
    )
}
export default AnecdotesList




  
  
