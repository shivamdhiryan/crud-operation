import React from 'react'
import Create from './Components/Create'
import Read from './Components/Read'
import { Route, Routes } from 'react-router-dom'
import Upadate from './Components/Upadate'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element = {<Create/>}></Route>
        <Route path='/read' element = {<Read/>}></Route>
        <Route path='/update' element = {<Upadate/>}></Route>
       </Routes>
    </div>
  )
}

export default App;
