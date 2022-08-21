import {useState, useEffect} from 'react'

function getStorageData(key, defaultValue) {
 const saved = localStorage.getItem(key)
 const initial = JSON.parse(saved)
 return initial || defaultValue
}

export const useLocalStorage = (key, defaultData) => {
 const [data, setData] = useState(() => getStorageData(key, defaultData))
 
 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(data))
 }, [data, setData])
 
 return [data, setData]
}

