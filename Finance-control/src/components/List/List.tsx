import React from 'react'
import styles from './List.module.scss'
import { useAppSelector } from '../../hooks/hooks'
import { Text } from '../../styled/styled'

const ListItems = () => {
  const { expenses } = useAppSelector(({ balanceSlice }) => balanceSlice)

  return (
    <>
      <ul>{expenses.length 
        ? <div>
          <div className={styles.heading}>
            <h3>Category</h3>
            <h3>Description</h3>
            <h3>Expenses</h3>
          </div>
          <div className={styles.items}>
            {expenses.map(item => (
              <li key={item.id}>
                <div className={styles.item}>
                  <Text>{item.category}</Text>
                  <Text className={styles.desc}>{item.description}</Text>
                  <Text>${item.expenses}</Text>
                </div>
                <hr />
              </li>
            ))
            }
          </div>
        </div>
        : <Text>No items has been added</Text>
      }
      </ul>
    </>
  )
}
export default ListItems
