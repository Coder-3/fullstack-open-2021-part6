import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notificationChange, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter) {
      return anecdotes.filter(anecdote => {
        if (anecdote.content.toLowerCase().includes(filter.toLowerCase())) {
          return anecdote
        }
      })
    } else {
      return anecdotes
    }
  })


  const sortedAnecdotes = () => {
    return anecdotes.sort((a, b) => b.votes - a.votes)
  }

  const handleVote = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(notificationChange(anecdote.content))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
      {sortedAnecdotes().map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => handleVote(anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList