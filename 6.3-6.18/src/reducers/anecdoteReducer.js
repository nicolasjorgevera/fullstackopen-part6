import anecdoteServices from '../services/anecdotes'


const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE': {
      return state.map(anecdote => 
        anecdote.id !== action.data.updateAnecdote.id ? anecdote : action.data.updateAnecdote)
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = {...anecdote, votes: anecdote.votes + 1}
    const updateAnecdote = await anecdoteServices.updateAnecdote (changedAnecdote.id, changedAnecdote)
    dispatch({
      type: 'VOTE',
      data: { updateAnecdote }
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(content)
    dispatch(  {
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
  

}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch(
    {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
}
}

export default reducer