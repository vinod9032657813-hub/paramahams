
import React from 'react'
//import Header from './cev bio company/Header'
import Mainpage from './Mainpage'
  import Career from './Career'
import Contact from './Contact'
import Business from './Business'
import Sustainability from './Sustainability'
import About from './About'
import Header from './cev bio company/Header'
import Bsr from './Bsr'
import Material from './Material'
import Investers from './Investers'
import Buyers from './Buyers'
import Place  from './Place'
import {  Routes,Route } from 'react-router-dom'
import Bioenergy from './Bioenergy'
import All from './All'



const App = () => {
  return (
    <div>
      
      
          <Routes>
      <Route path='/' element={<All/>}/> 
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/business' element={<Business/>}/>
       <Route path='/sus' element={<Sustainability/>}/>
       <Route path='/career' element={<Career/>}/>
       <Route path='/investers' element={<Investers/>}/>
       <Route path='/place' element={<Place/>}/>
       <Route path='/material' element={<Material/>}/>
        <Route path='/bioenergy' element={<Bioenergy/>}/>
         <Route path='/bsr' element={<Bsr/>}/>
          <Route path='/material' element={<Material/>}/>

<Route path='/buyers' element={<Buyers/>}/>
      </Routes>*/
      
     

 
    
      </div>
  )
}

export default App