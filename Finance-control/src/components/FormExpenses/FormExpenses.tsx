import React, { useState, ChangeEvent } from 'react'
import { Box, TextField, Select, FormControl, MenuItem, InputLabel, Button, SelectChangeEvent } from '@mui/material'
import { setExpenses } from '../../features/balanceSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

const FormExpenses = () => {
  const { categoryExpenses } = useAppSelector(({ balanceSlice }) => balanceSlice)
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleChangeSelect = (event: SelectChangeEvent<string>): void => {
    setCategory(event.target.value)
  }
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(parseInt(event.target.value))
  }
  const handleSubmit = (): void => {
    dispatch(setExpenses(category, value))
    setValue(0)
    setCategory('')
  }

  return (
    <Box sx={{
      mb: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Box sx={{
        backgroundColor: '#fff',
        borderRadius: 1,
        p: 1,
        mb: 1,
        display: 'flex',
        justifyContent: 'center',
        minWidth: 300
      }}
      >
        <FormControl sx={{ mb: 1 }}>
          <TextField
            type='number'
            label='Expenses'
            variant='standard'
            value={value}
            onChange={handleChangeInput}
          />
        </FormControl>
      </Box>
      <Box sx={{
        backgroundColor: '#fff',
        borderRadius: 1,
        mb: 2,
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        minWidth: 300
      }}>
        <FormControl sx={{
          mb: 1,
          minWidth: 250
        }}>
          <InputLabel id='demo-simple-select-label'>Category</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Category'
            value={category}
            onChange={handleChangeSelect}
          >{
              categoryExpenses.map((item: string) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Box>
      {(category && value)
        ? <Button variant='contained' onClick={handleSubmit}>Apply</Button>
        : <Button variant='contained' disabled>Apply</Button>
      }
      
    </Box>
  )
}

export default FormExpenses
