export const startTimerAction = () => {
  return {
    type: 'START_TIMER'
 }
}

export const stopTimerAction = () => {
  return {
    type: 'STOP_TIMER'
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
