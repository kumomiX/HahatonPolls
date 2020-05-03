import React from 'react'
import {
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { Schedule, Send, Poll, CancelScheduleSend } from '@material-ui/icons'
import styled from 'styled-components'
import empty from 'assets/img/empty.png'
import { formatDate } from 'helpers'
import { Link } from 'react-router-dom'

const icons = {
  pending: <Schedule color="primary" />,
  active: <Send color="primary" />,
  success: <Poll color="primary" />,
  cancelled: <CancelScheduleSend color="error" />,
}

const Body = styled.div`
  padding: 2rem;
  padding-bottom: 0;
`

const Polls = ({ title, polls, ...props }) => {
  return (
    <Body {...props}>
      {polls ? (
        polls.length > 0 ? (
          <>
            <Typography color="primary" variant="h5" gutterBottom>
              {title}
            </Typography>
            <List>
              {polls.map((poll) => (
                <ListItem
                  button
                  key={poll.uuid}
                  component={Link}
                  to={`/poll/${poll.uuid}`}
                >
                  <ListItemIcon>{icons[poll.type]}</ListItemIcon>
                  <ListItemText
                    primary={poll.text}
                    secondary={`${formatDate(poll.start_date)} - ${formatDate(
                      poll.end_date,
                    )}`}
                    primaryTypographyProps={{
                      style: {
                        width: '100%',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
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
              Запланируйте новый опрос в форме слева.
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
