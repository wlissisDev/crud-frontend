import './App.css'

import {Routes, Route} from 'react-router-dom'
import { Create } from './page/Create'
import { Home } from './page/Home'

function App() {

  return (
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
  )
}

export default App
