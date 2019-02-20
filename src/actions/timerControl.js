export const startTimerAction = (time) => {
  return {
    type: 'START_TIMER'
 }
}

export const stopTimerAction = () => {
  return {
    type: 'STOP_TIMER'
 }
}

export const updateTimerAction = (time) => {
  return {
    type: 'UPDATE_TIMER',
    time: time
 }
}

export const resetAction = () => {
 return {
  type: 'RESET'
 }
}

export const tickAction = () => {
  return {
    type: "TIMER_TICK"
  }
};
