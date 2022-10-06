import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { Text, Heading } from '../../styled/styled'
import { Box } from '@mui/material'
import { lightBlue } from '@mui/material/colors'

const ListItems = () => {
  const { expenses } = useAppSelector(({ balanceSlice }) => balanceSlice)

  return (
    <>
      <ul>{expenses.length 
        ? <Box sx={{ backgroundColor: '#fff', borderRadius: 2, pb: 2 }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#fff',
            backgroundColor: lightBlue[500],
            px: 2,
            mb: 1,
            boxShadow: 1,
            borderRadius: 1
          }}>
            <Heading>Category</Heading>
            <Heading>Expenses</Heading>
          </Box>
          {expenses.map(item => (
            <li key={item.id}>
              <Box sx={{
                px: 2,
                mb: 1,
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: 1
              }}>
                <Text>{item.category}</Text>
                <Text>${item.expenses}</Text>
              </Box>
            </li>
          ))
          }
        </Box>
        : <Text>No items has been added</Text>
      }
      </ul>
    </>
  )
}
export default ListItems
