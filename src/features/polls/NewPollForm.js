import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Typography, Button, Collapse, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Search from 'features/search'
import useInput from 'hooks/useInput'
import { createPoll } from './pollsSlice'
import { unwrapResult } from '@reduxjs/toolkit'

const Form = styled.form`
  background: ${(p) => p.theme.palette.background.primary};
  padding: 2rem;
  /* border-right: 1px solid ${(p) => p.theme.palette.text.secondary};
  border-bottom: 1px solid ${(p) => p.theme.palette.text.secondary}; */
  display:grid;
  grid-auto-flow:row;
  box-shadow: ${(p) => p.theme.shadows.strong};
  padding-bottom:.625rem;
  z-index:2;
`

const ButtonsWrapper = styled.div`
  margin-left: auto;
  margin-top: 0.325rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.325rem;
`

const Wrapper = styled.div`
  display: grid;
  margin-top: 0.325rem;
  gap: 0.325rem;
  grid-auto-flow: column;
  grid-template-columns: 1fr calc(420px + 0.325rem);
  margin-bottom: 1rem;
`

const NewPollForm = (props) => {
  const dispatch = useDispatch()
  const [isNew, setIsNew] = useState(false)

  const selectedAddresses = useSelector(({ addresses }) => addresses.selected)
  const {
    value: startDate,
    bind: bindStartDate,
    reset: resetStartDate,
  } = useInput('2017-05-24T10:30')
  const { value: endDate, bind: bindEndDate, reset: resetEndDate } = useInput(
    '2017-05-24T10:30',
  )
  const {
    value: pollText,
    bind: bindPollText,
    reset: resetPollText,
  } = useInput('')

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      const addresses = selectedAddresses.map((a) => a.uuid)

      dispatch(createPoll({ addresses, startDate, endDate, text: pollText }))
        .then(unwrapResult)
        .then((ret) => {
          resetStartDate()
          resetEndDate()
          resetPollText()
          setIsNew(!isNew)
        })
    },
    [
      dispatch,
      endDate,
      isNew,
      pollText,
      resetEndDate,
      resetPollText,
      resetStartDate,
      selectedAddresses,
      startDate,
    ],
  )

  return (
    <Form onSubmit={handleSubmit} {...props}>
      <Typography variant="h4" gutterBottom color="primary">
        {isNew ? 'Новый опрос' : 'Поиск адресов'}
      </Typography>

      <Search placeholder="Поиск..." />
      <Collapse in={isNew}>
        <Wrapper>
          <div>
            <Typography style={{ visibility: 'hidden' }} color="textSecondary">
              Опрос
            </Typography>

            <TextField
              label="Текст опроса"
              name="body"
              multiline
              fullWidth
              {...bindPollText}
            />
          </div>
          <div>
            <Typography style={{ marginLeft: '.625rem' }} color="textSecondary">
              Диапазон времени
            </Typography>
            <TextField
              label="C"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 0, width: '210px', marginRight: '.325rem' }}
              {...bindStartDate}
            />
            <TextField
              label="По"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 0, width: '210px' }}
              {...bindEndDate}
            />
            <Typography color="textSecondary">
              Опрос будет производиться в указанные промежутки времени, пока не
              будет получено ответа.
            </Typography>
          </div>
        </Wrapper>
      </Collapse>
      <ButtonsWrapper>
        {isNew && <Button type={isNew && 'submit'}>Запланировать опрос</Button>}
        <Button
          onClick={() => setIsNew(!isNew)}
          color={isNew ? 'default' : 'secondary'}
        >
          {isNew ? 'Отмена' : 'Новый опрос'}
        </Button>
      </ButtonsWrapper>
    </Form>
  )
}

export default NewPollForm
