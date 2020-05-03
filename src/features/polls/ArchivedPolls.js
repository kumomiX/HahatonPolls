import React from 'react'
import PollsList from './PollsList'

const PlannedPolls = () => {
  const polls = null
  return (
    polls &&
    polls.length > 0 && <PollsList title="Завершенные опросы"></PollsList>
  )
}

export default PlannedPolls
