import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './components/Posts'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/details/:id" component={() => <Posts />} />
      </Switch>
    </Router>
  )
}

export default App
