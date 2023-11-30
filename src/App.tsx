import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { router } from './lib/router/router'
import { theme } from './lib/theme/theme'
// Fonts
import '@fontsource-variable/plus-jakarta-sans'
// CSS
import '@mantine/core/styles.layer.css'

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </MantineProvider>
  )
}

export default App
