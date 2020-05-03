import React from 'react'
import { Button, Drawer } from '@material-ui/core'
import HomeTemplate from 'templates/Home'
import Map from 'features/map/Map'

import PlannedPolls from 'features/polls/PlannedPolls'
import ArchivedPolls from 'features/polls/ArchivedPolls'
import NewPollForm from 'features/polls/NewPollForm'
import PollDrawer from 'features/polls/PollDrawer'

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
      <PollDrawer />
    </HomeTemplate>
  )
}

export default HomePage
