import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"


const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    const anecdotes = state.anecdotes.filter(a => a.content.toLocaleUpperCase().includes(state.filter.toLocaleUpperCase()))
    anecdotes.sort (function (a,b) {
      return (b.votes - a.votes)
    })
    return anecdotes
  })
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`You voted '${anecdote.content}'`,5))
  }

  return (
    <>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList
