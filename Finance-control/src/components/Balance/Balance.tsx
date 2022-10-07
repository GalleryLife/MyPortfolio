import React, { ChangeEvent, useLayoutEffect, useRef, KeyboardEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { changeBalance, toggleEditMode, updateBalance } from '../../features/balanceSlice'
import { Box, TextField } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { Heading, Text } from '../../styled/styled'

const Balance = () => {
  const { balance, isEdit, expenses } = useAppSelector(({ balanceSlice }) => balanceSlice)
  const dispatch = useAppDispatch()
  const editBalance = useRef<HTMLInputElement>(null)
  useLayoutEffect(() => {
    if (isEdit && editBalance) {
      editBalance.current?.focus()
    }
  }, [isEdit])

  const options: any = { weekday: 'long' }
  const date = new Date().getDate()
  const day = new Intl.DateTimeFormat('en-US', options).format(new Date())
  const endEdit = (event: KeyboardEvent & ChangeEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter') {
      setBalanceInput(event)
      setMode()
    }
  }
  
  const setMode = (): void => {
    dispatch(toggleEditMode())
    expenses.length >= 1 && dispatch(updateBalance())
  }
  const setBalanceInput = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeBalance(event.target.value))
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 2,
      mt: 2,
      mb: 2,
      backgroundColor: '#fff',
      boxShadow: 3
    }}>
      <Box sx={{ backgroundColor: lightBlue[500], p: 2, color: '#fff', borderRadius: 2 }}>
        <Heading>Date</Heading>
        <Text>{date}, {day}</Text>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2
      }}>
        <Heading>Total balance</Heading>
        {
          isEdit
            ? <TextField
              variant='outlined'
              inputRef={editBalance}
              type='number'
              value={balance === 0 ? '' : balance}
              onChange={setBalanceInput}
              onKeyDown={endEdit}
            />
            : <Text>$ {balance}</Text>
        }
      </Box>
    </Box>
  )
}

export default Balance
