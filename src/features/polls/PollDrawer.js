import React, { useEffect, useCallback } from 'react'
import {
  Drawer,
  IconButton,
  Typography,
  CircularProgress,
  Chip,
  Button,
} from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { formatDate } from 'helpers'
import PollChart from './PollChart'
import { fetchCurrentPoll } from './pollsSlice'

const Page = styled.div`
  padding: 2rem;
  padding-top: 5rem;
  display: grid;

  /* grid-auto-rows: max-content; */
  grid-template-rows: 1fr max-content;
  grid-template-columns: 1fr;
  align-items: end;
  gap: 1rem;
`

const ChipWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, max-content));
  gap: 0.325rem 0.125rem;
`

const buttonTexts = {
  success: 'Выгрузить бюллетень',
  pending: 'Отменить оповещение',
  active: 'Отменить оповещение',
  cancelled: 'Перезапустить оповещение',
}

const PollDrawer = ({ onClose }) => {
  const { poll: pollUuid } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const poll = useSelector(({ polls }) => polls.current)

  useEffect(() => {
    dispatch(fetchCurrentPoll({ uuid: pollUuid }))
  }, [dispatch, pollUuid])

  const handleActionButtonClick = useCallback(() => {
    switch (poll?.type) {
      case 'success':
      default:
        break
    }
  }, [poll])

  return (
    <Drawer
      onOpen={() => {}}
      anchor="right"
      open={pollUuid}
      onClose={() => history.push('/')}
      elevation={20}
      variant="persistent"
      PaperProps={{
        style: {
          width: 450,
          border: 'none',
          zIndex: 1,
          // overflowX: 'hidden',
        },
      }}
    >
      {poll ? (
        <Page>
          <Typography
            style={{ marginBottom: '-.825rem' }}
            color="textSecondary"
          >
            {formatDate(poll?.start_date)} - {formatDate(poll?.end_date)}
          </Typography>
          <Typography color="primary" variant="h5">
            «{poll.text}»
          </Typography>
          {poll?.data && poll?.type === 'success' && (
            <PollChart data={poll.data} />
          )}

          {poll?.addresses && (
            <div>
              <Typography color="textSecondary" gutterBottom>
                Адреса проведения опроса:
              </Typography>
              {/* <Typography variant="body2">
                {poll?.addresses?.map((a) => a.short_address).join(', ')}
              </Typography> */}
              <ChipWrapper>
                {poll?.addresses?.map((a) => (
                  <Chip key={a.uuid} label={a.short_address} clickable />
                ))}
              </ChipWrapper>
            </div>
          )}
        </Page>
      ) : (
        <CircularProgress
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        />
      )}

      <IconButton
        onClick={() => history.push('/')}
        style={{ position: 'absolute', left: '2rem', top: '1rem' }}
      >
        <ArrowBack />
      </IconButton>

      <Button
        onClick={handleActionButtonClick}
        style={{ position: 'absolute', right: '2rem', top: '1rem' }}
      >
        {buttonTexts[poll?.type]}
      </Button>
    </Drawer>
  )
}

export default PollDrawer
