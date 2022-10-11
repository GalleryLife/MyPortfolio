import React, { useState, ChangeEvent } from 'react'
import { TextField, Select, FormControl, MenuItem, InputLabel, Button, SelectChangeEvent } from '@mui/material'
import { setExpenses } from '../../features/balanceSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

const FormExpenses = () => {
  const { categoryExpenses } = useAppSelector(({ balanceSlice }) => balanceSlice)
  const [value, setValue] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const dispatch = useAppDispatch()

  const handleChangeSelect = (event: SelectChangeEvent<string>): void => {
    setCategory(event.target.value)
  }
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(parseInt(event.target.value))
  }
  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }
  const handleSubmit = (): void => {
    dispatch(setExpenses(category, value, description))
    setValue(0)
    setCategory('')
    setDescription('')
  }

  return (
    <div>
      <div>
        <FormControl sx={{ mb: 1 }}>
          <TextField
            type='number'
            label='Expenses'
            variant='standard'
            value={value}
            onChange={handleChangeInput}
          />
        </FormControl>
      </div>
      <div>
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
        <div>
          <FormControl sx={{ mb: 2 }}>
            <TextField 
              id='outlined-basic' 
              label='Description' 
              variant='outlined' 
              value={description}
              onChange={handleChangeDescription}
            />
          </FormControl> 
        </div>
      </div>
      {(category && value)
        ? <Button variant='contained' onClick={handleSubmit}>Apply</Button>
        : <Button variant='contained' disabled>Apply</Button>
      }
      
    </div>
  )
}

export default FormExpenses
