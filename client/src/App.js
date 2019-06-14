import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Departments from './components/Departments'
import Department from './components/Department'
import DepartmentForm from './components/DepartmentForm'
import {Switch, Route,} from 'react-router-dom'
import Item from './components/Item'


const App = () => (


  <> 
<Navbar/>
  <Switch>
    <Route exact path = '/' component={Home}/>
    <Route exact path = '/about' component={About}/>
    <Route exact path = '/departments' component={Departments}/>
    <Route exact path = '/departments/new' component={DepartmentForm}/>
    <Route exact path = '/departments/:id/edit' component={DepartmentForm}/>
    <Route exact path = '/departments/:id' component={Department}/>
    <Route exact path = '/departments/:department_id/items/:id' component={Item}/>
    <Route component={NoMatch}/>
  </Switch>
</>
    
  
  )

export default App;
