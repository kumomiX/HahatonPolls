import React from 'react'
import { Typography, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'
import empty from 'assets/img/empty.png'

const Body = styled.div`
  padding: 2rem;
`

const Polls = ({ title, ...props }) => {
  const polls = []

  return (
    <Body {...props}>
      {polls ? (
        polls.length > 0 ? (
          <>
            <Typography color="primary" variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography>опрос 1</Typography>
          </>
        ) : (
          <>
            <img
              style={{
                width: 150,
                maxHeight: 300,
                marginBottom: '.625rem',
                marginTop: '.625rem',
              }}
              src={empty}
              alt=""
            ></img>
            <Typography variant="h6">Тут пока ничего нет</Typography>
            <Typography color="textSecondary">
              Начните новый опрос в форме слева.
            </Typography>
          </>
        )
      ) : (
        <CircularProgress />
      )}
    </Body>
  )
}
export default Polls
