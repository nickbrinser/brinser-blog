import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import { LayoutGrid, Col, Row } from './components/LayoutComponent'
import { useDarkMode } from './effects/useDarkMode'
import Header from './components/Header'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'
import SocialLinksBar from './components/SocialLinksBar'

function UnauthenticatedApp() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  if (!componentMounted) {
    return null
  }
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <LayoutGrid>
          <Row>
            <Col size="1">
              <Header theme={theme} toggleTheme={toggleTheme} />
            </Col>
          </Row>
          <Row>
            <Col collapse="xs">
              <SocialLinksBar absolute />
            </Col>
            <Col size="1">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/blog" component={BlogList} />
              <Route exact path="/blog/:blogId" component={BlogPost} />
            </Col>
          </Row>
        </LayoutGrid>
      </ThemeProvider>
    </Router>
  )
}

export default UnauthenticatedApp
