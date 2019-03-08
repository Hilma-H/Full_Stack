import React from 'react';
// import reducer from '../reducers/anecdoteReducer'

//const store = createStore(reducer)

const voting = (id) => {
      return {
        type: 'VOTE',
        id: id
      }
    }

 const votedMessage = (content) => {
   return {
     type: 'VOTED',
    content: content
   }
 }

 const remove = () => {
   return {
     type: 'REMOVE'
   }
 }

const AnecdotesList = ({store}) => {
    const {anecdotes, filter} = store.getState()
    console.log('lista', anecdotes)
  const whatToShow = () => {
    if (filter === 'ALL') {
      return anecdotes
    } else {
      const show = anecdotes.filter(s => s.content.includes(filter))
      return show
    }

  }
    const vote = (id) => {
    console.log('vote', id)
    const voted = anecdotes.filter(a => a.id === id)
    const content = voted.map(a => a.content)
    store.dispatch(
      voting(id),
    )
    store.dispatch(
      votedMessage(content)
    )
    setTimeout( () => {
      store.dispatch(
        remove()
      )
    }, 5000)
    }

    return (
    <div>
        {whatToShow().map(anecdote =>
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




  
  
