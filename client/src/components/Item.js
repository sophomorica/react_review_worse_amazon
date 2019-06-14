import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Container, Image, Icon} from 'semantic-ui-react'
import Reviews from './Reviews'


class Item extends React.Component{
  state = {item: {}}

  componentDidMount(){
    const {match: {params: {id, department_id} } } = this.props
    
  }
  render(){
    return(
      <>

      </>
    )
  }
}

export default Item