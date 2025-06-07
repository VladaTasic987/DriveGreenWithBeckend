// import './App.css'
import './App.scss'

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './assets/Router';
import { UserProvider } from './assets/Context';
function App() {
  
  return (
    
    
    <BrowserRouter>
    <UserProvider>
      <AppRoutes />
      </UserProvider>
    </BrowserRouter>
    
    
  )
}

export default App
