import React, { useMemo } from 'react'
import '../../_helpers/reset.scss'
import ListItems from '../List/List'
import Balance from '../Balance/Balance'
import {
  Box,
  Container,
  ThemeProvider,
  createTheme,
  FormGroup,
  FormControlLabel,
  CssBaseline
} from '@mui/material'
import { getDesignTokens, MaterialUISwitch } from '../../theme/theme'
import ActionsPanel from '../ActionsPanel/ActionsPanel'
import { setTheme } from '../../features/balanceSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Route } from 'react-router-dom'
import FormExpenses from '../FormExpenses/FormExpenses'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(({ balanceSlice }) => balanceSlice)
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      dispatch(setTheme())
    }
  }), [])
  const themeMode = useMemo(() => createTheme(getDesignTokens(theme)), [theme])
  const toggleTheme = (): void => colorMode.toggleColorMode()
  
  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline/>
      <Container maxWidth='lg'>
        <Box sx={{
          display: 'flex',
          mx: 'auto',
          justifyContent: 'center'
        }}>
          <FormGroup>
            <FormControlLabel control={<MaterialUISwitch onClick={toggleTheme} sx={{ m: 1 }}/>} label={false}/>
          </FormGroup>
          <section>
            <div>
              <Balance/>
              <ActionsPanel/>
              <Route path='/expenses'>
                <ListItems/>
              </Route>
              <Route path='/add_expenses'>
                <FormExpenses/>
              </Route>
            </div>
          </section>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
