const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTE_NOTIFICATION':
      return action.notification
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

let timerID = undefined

export const setNotification = (notification, duration) => {
  return async dispatch => {
    clearTimeout(timerID)

    dispatch({
      type: 'VOTE_NOTIFICATION',
      notification
    })

    timerID = setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION'
      })
    }, duration)
  }
}

export default notificationReducer