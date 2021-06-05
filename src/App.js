import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Home';
import NoRoute from './NoRoute';
import Profile from './Profile';
function App() {
  return (
    <div >
        
     <Router>
     <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/profile/:id' exact component={Profile}/>
            <Route component={NoRoute}/>
        </Switch>
     </Router>
    </div>
)
}

export default App
