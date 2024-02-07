import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyte } from './styles/global'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyte />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
