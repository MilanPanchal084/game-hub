import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './Components/theme'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </StrictMode>,
)