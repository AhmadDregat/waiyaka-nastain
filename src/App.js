import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from  './components/Home'
import Relations from './components/Relations'
import News from './components/News'
import DashBord from './components/DashBord'


function App() {
  return (
      <Router>
        <div className="App" id="App">
        <Route key="login" exact path="/" render={() => <Login />}  />
        <Route exact key="dashBord"  path="/DashBord" render={() => <DashBord/>}  />
        </div>
       
        {/* <Route exact key="homePage"  path="/homePage" render={() => <Home/>}  />
        <Route exact key="relations"  path="/relations" render={() => <Relations/>}  />
        <Route exact key="news"  path="/news" render={() => <News/>}  /> */}
      </Router>
  )
}

export default App