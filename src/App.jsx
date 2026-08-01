import React from 'react'

import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Route, Routes } from 'react-router'
import ContactChatScreen from './Screens/ContactChatScreen/ContactChatScreen'
import { ThemeContextProvider } from './Context/ThemeContext'
import { ContactContextProvider } from './Context/ContactContext'
import NewContactScreen from './Screens/NewContactScreen/NewContactScreen'


function App() {

  return (
    <ThemeContextProvider>
      <div>
        <Routes>
          <Route element={<ContactContextProvider/>}>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/home' element={<HomeScreen />} />
            <Route path= "/new-contact" element={<NewContactScreen />} />
            <Route path='/contact/:contact_id' element={<ContactChatScreen />} />
          </Route>
        </Routes>
      </div>
    </ThemeContextProvider>
  )
}



export default App
