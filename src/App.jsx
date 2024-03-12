import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
import Layout from './Layout'
import TechnnicalData from './Pages/TechnnicalData'
import Merch from './Pages/Merch'
import PhotoBank from './Pages/PhotoBank'

import PhotoBankDeco54 from './PhotoBanks/PhotoBankDeco54'
import PhotoBankSpiritXl from './PhotoBanks/PhotoBankSpiritXl'
import PhotoBankkeys from './PhotoBanks/PhotoBankkeys'
import PhotoBankProject from './PhotoBanks/PhotoBankProject'
import PhotoBankHydrowood from './PhotoBanks/PhotoBankHydrowood'
import PhotoBankQuick48 from './PhotoBanks/PhotoBankQuick48'
import PhotoBankDecotile from './PhotoBanks/PhotoBankDecotile'
import PhotoBankEvolve from './PhotoBanks/PhotoBankEvolve'
import PhotoBankSupreme from './PhotoBanks/PhotoBankSupreme'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/cpf-vendors-resources' element={<Layout />}></Route>
      <Route path='/cpf-vendors-resources/technnical-data' element={<TechnnicalData />}/>
      <Route path='/cpf-vendors-resources/photo-bank' element={<PhotoBank />}/>
      <Route path='/cpf-vendors-resources/merch' element={<Merch />}/>

      //PHOTO BANKS
      
      <Route path='/cpf-vendors-resources/photo-bank/deco-54' element={<PhotoBankDeco54 />} />
      <Route path='/cpf-vendors-resources/photo-bank/spirit-xl' element={<PhotoBankSpiritXl />} />
      <Route path='/cpf-vendors-resources/photo-bank/keys' element={<PhotoBankkeys />} />
      <Route path='/cpf-vendors-resources/photo-bank/project' element={<PhotoBankProject />} />
      <Route path='/cpf-vendors-resources/photo-bank/hydrowood' element={<PhotoBankHydrowood />} />
      <Route path='/cpf-vendors-resources/photo-bank/quick48' element={<PhotoBankQuick48 />} />
      <Route path='/cpf-vendors-resources/photo-bank/decotile' element={<PhotoBankDecotile />} />
      <Route path='/cpf-vendors-resources/photo-bank/evolve' element={<PhotoBankEvolve />} />
      <Route path='/cpf-vendors-resources/photo-bank/supreme' element={<PhotoBankSupreme />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App