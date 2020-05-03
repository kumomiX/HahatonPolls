import React from 'react'
import PollsList from './PollsList'
import { useSelector } from 'react-redux'

const Archived = () => {
  const polls = useSelector(({ polls }) => polls.archivedList)
  return polls && polls.length > 0 ? (
    <PollsList polls={polls} title="Завершенные опросы"></PollsList>
  ) : null
}

export default Archived
