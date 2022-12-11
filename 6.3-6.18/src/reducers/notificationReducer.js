
const notificationReucer = (state = null, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data.notification
    case 'CLEAR_NOTIFICATION':
      return null 
    default:
        return state
  }
}


export const setNotification = (notification , seconds) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { notification }
    })
    await setTimeout(()=> {
      dispatch(clearNotification())}, seconds * 1000)
  }
}


export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}

export default notificationReucer