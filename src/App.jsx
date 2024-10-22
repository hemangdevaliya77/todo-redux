import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './compoenents/Counter'
import Todo from './compoenents/Todo'
import {Typography} from '@mui/material'
import Modal from './compoenents/Modal'

function App() {


  return (
    <>
    {/* <Typography variant='h4' sx={{fontWeight:700}}>React-Redux</Typography> */}
     <h1 className='todo-heading'>React-Redux</h1>
    {/* <Counter/> */}
   {/* <Modal/> */}
    <Todo/>

    </>
  )
}

export default App
