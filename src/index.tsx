import React from 'react'
import ReactDOM from 'react-dom/client'
import  GlobalStyle  from './styles/globalStyle.ts'
import Routas from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
    <Routas/>    
    <GlobalStyle/>
    </>
  </React.StrictMode>,
)
