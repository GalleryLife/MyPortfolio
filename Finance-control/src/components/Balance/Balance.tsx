import React, { ChangeEvent, useLayoutEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { changeBalance } from '../../features/balanceSlice'

const Balance = () => {
  const {
    balance,
    expenses
  } = useAppSelector(({ balanceSlice }) => balanceSlice)
  const dispatch = useAppDispatch()
  const [isEditMode, setEditMode] = useState(false)

  const endEdit = (event: any) => {
    if (event.code === 'Enter') {
      setBalanceInput(event)
      setMode()
    }
  }
  const editBalance = useRef<HTMLInputElement>(null)
  useLayoutEffect(() => {
    if (isEditMode && editBalance) {
      editBalance.current?.focus()
    }
  }, [isEditMode])
  const setMode = () => setEditMode(!isEditMode)
  const setBalanceInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      return alert('You should enter data')
    }
    dispatch(changeBalance(event.target.value))
  }

  return (
    <div className='balance balance__wrapper'>
      <h1 className='balance__logo'>Total balance</h1>
      <div>{
        isEditMode
          ? <input
            ref={editBalance}
            type='number'
            className='balance__edit'
            value={balance === 0 ? '' : balance}
            onChange={setBalanceInput}
            onKeyDown={endEdit}
          />
          : <h3 onClick={setMode}>{balance}</h3>
      }</div>
    </div>
  )
}

export default Balance
