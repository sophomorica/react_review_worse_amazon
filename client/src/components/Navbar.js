import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu, Segment, Image} from 'semantic-ui-react'

const Navbar = () =>(
  <>
  <Segment inverted>
    <Menu inverted>
        <Menu.Item>
      <NavLink 
      exact
      to ='/'
      activeStyle={styles.active}
      >
          Home
      </NavLink>
        </Menu.Item>
        <Menu.Item>

      <NavLink to ='/about'
      exact
      activeStyle={styles.active}
      >
          About
      </NavLink>
        </Menu.Item>
        <Menu.Item>
      <NavLink 
       exact
       activeStyle={styles.active}
      to ='/departments'>
          Departments
      </NavLink>
        </Menu.Item>
    </Menu>
    <div style={{display:'flex', justifyContent: 'center'}}>
      <div style={{
        display:'flex',
        justifyContent:'center',
        width:'50%',
        height: '280px'
      }}>
        <Image src={require('../images/image.png')} alt='logo' />
      </div>
    </div>
  </Segment>
  </>
)

const styles = {
  active: {
    color: 'orange',
    fontWeight: 'bold',
  }
}

export default Navbar