const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  } 
}
const functionSort = (a,b) => {
  if(a.votes < b.votes) {
    return 1
  } else if (a.votes > b.votes){
    return -1
  } else {
    return 0
  }
}
const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  let newState = state
  switch(action.type) {
    case 'VOTE':
      const id = action.id
      const toChange = state.find(t => t.id === id)
      const changed = {
        ...toChange,
        votes: toChange.votes + 1
      }
      console.log('votes?', toChange.votes)
      newState.sort(functionSort)
      state = newState
      return state.map(n => n.id !== id ? n : changed)
    case 'NEW':
      return [
        ...state, asObject(action.data)
      ] 
    default:return state
  }
}

export default anecdoteReducer