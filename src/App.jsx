import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import { lightTheme, darkTheme } from './utils/theme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useAppSelector } from './DAL/hooks'
import ThemeSwitch from './components/common/theme-switch/theme-switch'

function App() {
  const isDarkMode = useAppSelector(state => state.user.theme === 'dark')
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ThemeSwitch />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
