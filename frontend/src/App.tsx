import { useState, useEffect } from 'react';
import axios from 'axios'
// import './App.css'
import { Route, Routes } from 'react-router-dom';
import WebsitePreview from './pages/WebsitePreview';
import NotFound from './components/NotFound';


function App() {
  return(
  <Routes>
    <Route path='*' element={<NotFound></NotFound>}></Route>
    <Route path='/site/:id' element={<WebsitePreview></WebsitePreview>}></Route>
  </Routes>
  )


}

export default App
