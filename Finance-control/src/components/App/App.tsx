import 'antd/dist/antd.css'
import './App.scss'
import React, { useState } from 'react'
import '../../_helpers/reset.scss'
import { PlusOutlined } from '@ant-design/icons'
import ModalItem from '../Modal/Modal'
import ListItems from '../List/List'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setExpenses } from '../../features/balanceSlice'
import { IValuesExpenses } from '../../types/balance'
import Balance from '../Balance/Balance'

const App: React.FC = () => {
  const { expenses, balance } = useAppSelector(({ balanceSlice }) => balanceSlice)
  const dispatch = useAppDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    if (balance > 0) {
      setIsModalOpen(true)
    } else {
      return alert('Total balance 0')
    }
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const setValuesExpenses = (values: IValuesExpenses) => {
    dispatch(setExpenses(values))
  }

  return (
    <div>
      <ModalItem handleOk={handleOk} handleCancel={handleCancel} isModalOpen={isModalOpen}
        setValuesExpenses={setValuesExpenses}/>
      <section className='wrapper'>
        <div className='container'>
          <Balance />
          {expenses && <ListItems/>}
          <PlusOutlined className='add' onClick={showModal}/>
        </div>
      </section>
    </div>
  )
}

export default App
