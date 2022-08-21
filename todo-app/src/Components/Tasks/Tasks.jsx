import React, {useLayoutEffect, useRef, useState} from 'react';
import styles from './Tasks.module.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckIcon from '@mui/icons-material/Check';
import {Checkbox} from "@mui/material";

const Tasks = ({id, title, onEditValue, onRemoveTask}) => {
 const [isChecked, setChecked] = useState(false)
 const [isEditMode, setEditMode] = useState(false)
 const [value, setValue] = useState(title)
 const editTitle = useRef(null)
 
 useLayoutEffect(() => {
  if (isEditMode && editTitle) {
   editTitle.current.focus()
  }
 }, [isEditMode])
 
 const handlerRemoveTask = () => onRemoveTask(id)
 
 const handlerSetEditMode = () => setEditMode(!isEditMode)
 
 const handlerKeyEditMode = (event) => {
  if (event.key === "Enter") {
   onEditValue(value, id)
   setEditMode(!isEditMode)
  }
 }
 
 const handlerClickEditMode = () => {
  onEditValue(value, id)
  setEditMode(!isEditMode)
 }
 
 const handlerSetValue = (event) => setValue(event.target.value)
 
 const handlerCheck = (event) => {
  setChecked(event.target.checked)
  setTimeout(() => onRemoveTask(id), 300)
 }
 
 return (
  <>
   <div className={styles.task}>
    <div className={styles.removeIcon} onClick={handlerRemoveTask}>
     <DeleteForeverIcon/>
    </div>
    {isEditMode ? (
     <input
      ref={editTitle}
      value={value}
      className={styles.changeTask}
      onKeyDown={handlerKeyEditMode}
      onChange={handlerSetValue}
     />
    ) : (
     <h3 className={styles.value}>{value}</h3>
    )}
    <div className={styles.actions}>
     {isEditMode ? (
      <CheckIcon onClick={handlerClickEditMode}/>
     ) : (
      <BorderColorIcon
       onClick={handlerSetEditMode}
      />
     )}
     <Checkbox
      onChange={handlerCheck}
     />
    </div>
   </div>
  </>
 )
}

export default Tasks
