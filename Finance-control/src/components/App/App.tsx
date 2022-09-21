import './App.scss'
import React, {
  useRef,
  useState,
  useLayoutEffect,
  ReactEventHandler,
  ChangeEvent, MouseEventHandler
} from 'react'
import '../../_helpers/reset.scss'
import { Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ReactDOM from 'react-dom/client'

const App: React.FC = () => {
  const [balance, setBalance] = useState('0')
  const [isEditMode, setEditMode] = useState(false)
  const editBalance = useRef<HTMLInputElement>(null)
  useLayoutEffect(() => {
    if (isEditMode && editBalance) {
      editBalance.current?.focus()
    }
  }, [isEditMode])
  const setMode = () => setEditMode(!isEditMode)
  const endEdit = (event: any) => {
    if(event.)
  }
  const setBalanceInput = (event: ChangeEvent<HTMLInputElement>) => setBalance(event.target.value)

  return (
    <section className='wrapper'>
      <div className='container'>
        <div className='balance balance__wrapper'>
          <h1 className='balance__logo'>Total balance</h1>
          <div>{
            !isEditMode
              ? <input
                ref={editBalance}
                type='number'
                className='balance__edit'
                value={balance}
                onChange={setBalanceInput}
                onKeyDown={endEdit}
              />
              : <h3 onClick={setMode}>{balance}</h3>
          }</div>
        </div>
        <PlusOutlined className='add'/>
      </div>
    </section>
  )
}

export default App
