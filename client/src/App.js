import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Departments from './components/Departments'
import Department from './components/Department'
import {Switch, Route,} from 'react-router-dom'

const App = () => (

  
     <> 
    <Navbar/>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/about' component={About}/>
        <Route exact path = '/departments' component={Departments}/>
        <Route exact path = '/departments/:id' component={Department}/>
        <Route component={NoMatch}/>
      </Switch>
    </>
    
  
  )

export default App;
