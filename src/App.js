import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import { LayoutGrid, Col, Row } from './components/LayoutComponent'
import { useDarkMode } from './effects/useDarkMode'
import { AuthProvider } from './Auth'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SocialLinksBar from './components/SocialLinksBar'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return null
  }
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <LayoutGrid>
            <Row>
              <Col size={2}>
                <Header theme={theme} toggleTheme={toggleTheme} />
              </Col>
            </Row>
            <Row>
              <Col>
                <SocialLinksBar />
              </Col>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Row>
          </LayoutGrid>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  )
}

export default App
