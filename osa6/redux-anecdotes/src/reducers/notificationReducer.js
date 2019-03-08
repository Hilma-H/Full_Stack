
const initialState = 'Noticication messages'

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTED':
    const content = action.content
    state = `you voted '${content}'`
    return state
    case 'ADDED':
    const content2 = action.data
    state = `you added '${content2}'`
    return state
    case 'REMOVE':
    state = null
    return state
    
    default:return state
  }
}

export default anecdoteReducer