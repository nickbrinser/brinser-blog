import React from 'react'
import { Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import { LayoutGrid, Col, Row } from './components/LayoutComponent'
import { useDarkMode } from './effects/useDarkMode'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import CreatePost from './pages/CreatePost'
import SocialLinksBar from './components/SocialLinksBar'

function AuthenticatedApp() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  if (!componentMounted) {
    return null
  }
  return (
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
            <Route exact path="/blog" component={BlogList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/blog/:blogId" component={BlogPost} />
            <Route exact path="/createpost" component={CreatePost} />
          </Col>
        </Row>
      </LayoutGrid>
    </ThemeProvider>
  )
}

export default AuthenticatedApp
