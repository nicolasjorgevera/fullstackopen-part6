
const notificationReucer = (state = { notification: null , idTimeOut: null } , action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      if (state.idTimeOut) { clearTimeout(state.idTimeOut) }
      return action.data
    case 'CLEAR_NOTIFICATION':
      return { notification: null , idTimeOut: null } 
    default:
        return state
  }
}

export const setNotification = (notification , seconds) => {
  return dispatch => {
    const idTimeOut = setTimeout(()=> {
      dispatch(clearNotification())}, seconds * 1000)
    console.log('ESTO ES ID:', idTimeOut)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { notification , idTimeOut }
    })
  }
}


export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}

export default notificationReucer