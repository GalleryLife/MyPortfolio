import React from 'react'
import styles from './List.module.scss'
import { useAppSelector } from '../../hooks/hooks'

const ListItems = () => {
  const { expenses } = useAppSelector(({ balanceSlice }) => balanceSlice)

  return (
    <ul>
      {expenses.map((item: any) => (
        <li className={styles.item} key={new Date().getMilliseconds() + Math.random()}>
          <h3>{item.products}</h3>
          <span>{item.cost}</span>
        </li>
      ))}
    </ul>
  )
}
export default ListItems
