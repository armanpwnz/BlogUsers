import React from 'react'
import Home from '../src/components/Home'
import Header from '../src/components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from '../src/components/Posts'

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
