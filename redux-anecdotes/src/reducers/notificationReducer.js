const notificationReducer = (state = '', action) => {
  switch (action) {
    case 'NEW_ANECDOTE':
      return `you voted for '${action.notification}'`
    default:
      return state
  }
}

export const notificationChange = notification => {
  return {
    type: 'NEW_ANECDOTE',
    notification,
  }
}

export default notificationReducer