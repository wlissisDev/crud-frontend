import './App.css'

import {Routes, Route} from 'react-router-dom'
import { Create } from './page/Create'
import { Home } from './page/Home'
import { Update } from './page/Update'

function App() {

  return (
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
  )
}

export default App
