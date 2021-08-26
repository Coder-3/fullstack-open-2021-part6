const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTE_NOTIFICATION':
      return `you voted '${action.notification}'`
    case 'REMOVE_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const notificationChange = notification => {
  return {
    type: 'VOTE_NOTIFICATION',
    notification
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default notificationReducer