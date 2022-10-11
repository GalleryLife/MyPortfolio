import React from 'react'
import '../../_helpers/reset.scss'
import styles from './App.module.scss'
import ListItems from '../List/List'
import Balance from '../Balance/Balance'
// import { MaterialUISwitch } from '../../theme/theme'
import ActionsPanel from '../ActionsPanel/ActionsPanel'
import { Route } from 'react-router-dom'
import FormExpenses from '../FormExpenses/FormExpenses'
import { Button } from '@mui/material'
// import { FormControlLabel, FormGroup } from '@mui/material'

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <FormGroup>
        <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }}/>} label={false}/>
      </FormGroup> */}
      <header className={styles.header}>
        <h1><a href="#">Logo</a></h1>
        <Button variant='outlined'>Log in</Button>
      </header>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.actions}>
            <ActionsPanel/>
          </div>
          <div className={styles.pages}>
            <Balance/>
            <Route path='/expenses'>
              <ListItems/>
            </Route>
            <Route path='/add_expenses'>
              <FormExpenses/>
            </Route>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
