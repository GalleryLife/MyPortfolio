import React from 'react'
import { Box, Button } from '@mui/material'
import { CreateRounded } from '@mui/icons-material'
import { toggleEditMode } from '../../features/balanceSlice'
import { useAppDispatch } from '../../hooks/hooks'
import { Link } from 'react-router-dom'

const ActionsPanel = () => {
  const dispatch = useAppDispatch()
  const setMode = (): void => { dispatch(toggleEditMode()) }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      mb: 2
    }}>
      <Box sx={{ mx: 1 }}>
        <Button onClick={setMode} startIcon={<CreateRounded/>} variant='outlined'>Change balance</Button>
      </Box>
      <Box sx={{ mx: 1 }}>
        <Link to='/expenses'>
          <Button variant='outlined'>All expenses</Button>
        </Link>
      </Box>
      <Box sx={{ mx: 1 }}>
        <Link to='/add_expenses'>
          <Button variant='outlined'>Add expenses</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default ActionsPanel
