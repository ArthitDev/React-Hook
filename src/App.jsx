import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'

//Component
import UseState from './page/UseState'
import UseCallback from './page/UseCallback'
import UseContext from './page/UseContext'
import UseReducer from './page/UseReducer'
import UseRef from './page/UseRef'
import UseMemo from './page/UseMemo'
import UseEffect from './page/UseEffect'

function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>UseState</Link>
        </li>
        <li>
          <Link to='/effect'>UseEffect</Link>
        </li>
        <li>
          <Link to='/memo'>UseMemo</Link>
        </li>
        <li>
          <Link to='/callback'>UseCallback</Link>
        </li>
        <li>
          <Link to='/ref'>UseRef</Link>
        </li>
        <li>
          <Link to='/context'>UseContext</Link>
        </li>
        <li>
          <Link to='/reducer'>UseReducer</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element = {<UseState/>} />
      <Route path='/callback' element = {<UseCallback/>} />
      <Route path='/context' element = {<UseContext/>} />
      <Route path='/reducer' element = {<UseReducer/>} />
      <Route path='/ref' element = {<UseRef/>} />
      <Route path='/memo' element = {<UseMemo/>} />
      <Route path='/effect' element = {<UseEffect/>} />
    </Routes>
    </>
  )
}

export default App
