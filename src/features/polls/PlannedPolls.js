import React from 'react'
import PollsList from './PollsList'
import { useSelector } from 'react-redux'

const PlannedPolls = () => {
  const polls = useSelector(({ polls }) => polls.plannedPolls)
  return <PollsList polls={polls} title="Запланированные опросы"></PollsList>
}

export default PlannedPolls
