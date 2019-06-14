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
import ReviewForm from './components/ReviewForm'
// import ItemForm from './components/ItemForm'


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
    {/* <Route exact path = '/departments/:department_id/items/:id/edit' component={ItemForm}/> */}
    <Route exact path = '/review/:id/:edit' render={props=><ReviewForm edit {...props}/>}/>
    <Route component={NoMatch}/>
  </Switch>
</>
    
  
  )

export default App;
