import React from 'react'
import styles from './ActionsPanel.module.scss'
import { toggleEditMode } from '../../features/balanceSlice'
import { useAppDispatch } from '../../hooks/hooks'
import { Link } from 'react-router-dom'
import { CreateOutlined, QueueOutlined, ListAltOutlined } from '@mui/icons-material'

const ActionsPanel = () => {
  const dispatch = useAppDispatch()
  const setMode = (): void => { dispatch(toggleEditMode()) }

  return (
    <div>
      <ul className={styles.items}>
        <li onClick={setMode} className={styles.item}>
          <span><CreateOutlined color='primary'/></span>
          <span>Change balance</span>
        </li>
        <li>
          <Link to='/expenses' className={styles.item}>
            <span><ListAltOutlined color='primary' /></span>
            <span>All expenses</span>
          </Link>
        </li>
        <li>
          <Link to='/add_expenses' className={styles.item}>
            <span><QueueOutlined color='primary' /></span>
            <span>Add expenses</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ActionsPanel
