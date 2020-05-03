import React from 'react'
import { Button } from '@material-ui/core'
import HomeTemplate from 'templates/Home'
import Map from 'features/map/Map'
import PollsList from 'features/polls/PollsList'
import Search from 'features/search'
import PlannedPolls from 'features/polls/PlannedPolls'
import ArchivedPolls from 'features/polls/ArchivedPolls'
import NewPollForm from 'features/polls/NewPollForm'

const HomePage = () => {
  return (
    <HomeTemplate
      left={
        <>
          <NewPollForm />

          <Map
            style={{
              gridArea: 'map',
              width: '100%',
              height: '100%',
            }}
          />

          {/* <Button
            style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
          >
            Создать опрос
          </Button> */}
        </>
      }
    >
      <PlannedPolls />
      <ArchivedPolls />
    </HomeTemplate>
  )
}

export default HomePage
