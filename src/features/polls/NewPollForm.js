import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import {
  Typography,
  Button,
  Collapse,
  TextField,
  FormLabel,
} from '@material-ui/core'
import Search from 'features/search'
import useInput from 'hooks/useInput'

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
  grid-template-columns: 1fr calc(400px + 0.325rem);
  margin-bottom: 1rem;
`

const NewPollForm = (props) => {
  const [isNew, setIsNew] = useState(false)
  const { value: startDate, bind: bindStartDate } = useInput('2017-05-24T10:30')
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])
  return (
    <Form onSubmit={handleSubmit} {...props}>
      <Typography variant="h4" gutterBottom color="primary">
        {isNew ? 'Новый опрос' : 'Поиск адресов'}
      </Typography>

      <Search placeholder="Поиск..." />
      <Collapse in={isNew}>
        <Wrapper>
          <div>
            <Typography style={{ marginLeft: '.625rem' }} color="textSecondary">
              Опрос
            </Typography>

            <TextField
              label="Текст опроса"
              name="body"
              multiline
              fullWidth
              // onChange={(e) => {
              //   setBodyCursor(e.target.selectionStart)
              //   handleChange(e)
              // }}
            />
          </div>
          <div>
            <Typography style={{ marginLeft: '.625rem' }} color="textSecondary">
              Диапазон времени
            </Typography>
            <TextField
              label="C"
              type="datetime-local"
              // defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 0, width: '200px', marginRight: '.325rem' }}
              {...bindStartDate}
            />
            <TextField
              label="По"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 0, width: '200px' }}
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
          type={!isNew && 'submit'}
        >
          {isNew ? 'Отмена' : 'Новый опрос'}
        </Button>
      </ButtonsWrapper>
    </Form>
  )
}

export default NewPollForm
