import {Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import EditEmp from './components/EditEmp'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/edit/:id' element={<EditEmp/>}></Route>

   </Routes>
    </>
  )
}

export default App
