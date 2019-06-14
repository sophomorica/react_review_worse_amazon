import React from 'react'
import axios from 'axios'
import { Form, Button, Container } from 'semantic-ui-react'

class DepartmentForm extends React.Component{
  state = { name: ""}

  componentDidMount(){
    const {match:{params:{id}}} = this.props
    const { id }
  }
  
  render(){
    return(
      <Container>
        <Form onSubmit={this.handleSubmit}>
            <input
              name="name"
              placeholder="Department Name"
              required
              // value={name}
              onChange={this.handleChange}
               />
        <Button color="green" style={{marginTop:'30px'}}>Submit</Button>

        </Form>
</Container>
    )
  }
}



export default DepartmentForm