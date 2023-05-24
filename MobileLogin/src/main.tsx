import React from 'react'
import ReactDOM from 'react-dom/client'
import  GlobalStyle  from './globalStyle.ts'
import Home from './pages/Home'
import Users from './pages/Users/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
    {/* <Home /> */}
    <Users/>
    <GlobalStyle/>
    </>

  </React.StrictMode>,
)
