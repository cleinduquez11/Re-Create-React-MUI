import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import theme from './Components/theme.jsx'
import { ThemeProvider } from '@emotion/react'
import Layout from './Components/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


        <Layout />

 
  </React.StrictMode>,
)
