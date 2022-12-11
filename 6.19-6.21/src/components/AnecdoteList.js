import React from "react"
import { connect } from "react-redux"
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"


const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.setNotification(`You voted '${anecdote.content}'`,5)

  }

  return (
    <>
    {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  const anecdotes = state.anecdotes.filter(a => a.content.toLocaleUpperCase().includes(state.filter.toLocaleUpperCase()))
  anecdotes.sort (function (a,b) {
    return (b.votes - a.votes)
  })
  return {
    anecdotes: anecdotes
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes
