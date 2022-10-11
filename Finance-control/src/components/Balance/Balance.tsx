import React, { ChangeEvent, useLayoutEffect, useRef, KeyboardEvent } from 'react'
import styles from './Balance.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { changeBalance, toggleEditMode, updateBalance } from '../../features/balanceSlice'
import { TextField } from '@mui/material'
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

  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())
  const date = new Date().getDate()
  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())
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
    <div className={styles.wrapper}>
      <div className={styles.date}>
        <Heading>{month}</Heading>
        <Text>{date}, {day}</Text>
      </div>
      <div className={styles.balance}>
        <span>Total balance</span>
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
      </div>
    </div>
  )
}

export default Balance
