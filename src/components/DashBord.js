import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from  './Home'
import Relations from './Relations'
import News from './News'
import BorgerBar from './BorgerBar'
import Mesbaha from './Mesbaha'

function DashBord() {
  return (
      <Router>
          <BorgerBar/> 
        <div className="dash">
        <Route exact key="homePage"  path="/homePage" render={() => <Home/>}  />
        <Route exact key="relations"  path="/relations" render={() => <Relations/>}  />
        <Route exact key="news"  path="/news" render={() => <News/>}  />
        <Route exact key="Mesbaha"  path="/Mesbaha" render={() => <Mesbaha/>}  />
        </div>
      </Router>
  )
}

export default DashBord