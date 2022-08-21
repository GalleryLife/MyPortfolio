import React, {useState} from 'react';
import styles from './SetTask.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SetTask = ({addTask}) => {
 const [value, setValue] = useState('')
 
 const handlerKeyDown = (event) => {
  if (event.key === "Enter") {
   addTask(value)
   setValue('')
  }
 }
 
 const handlerSetValue = (event) => setValue(event.target.value)
 
 const handlerAddTask = () => {
  addTask(value)
  setValue('')
 }
 
 return (
  <section className={styles.setTaskWrapper}>
   <TextField
    label="Add your ToDo"
    variant="standard"
    value={value}
    onKeyDown={handlerKeyDown}
    onChange={handlerSetValue}/>
   <Button
    variant={value ? "contained" : "disabled"}
    onClick={handlerAddTask}
   >Set task
   </Button>
  </section>
 )
}

export default SetTask;
