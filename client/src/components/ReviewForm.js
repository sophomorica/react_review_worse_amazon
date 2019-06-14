import React from 'react'
import axios from 'axios'
import { Form, Rating, Dropdown } from 'semantic-ui-react'


class ReviewForm extends React.Component{
  state = {title: '',body:'', author:'', rating:0, image_url:'' }


  componentDidMount(){
    if(this.props.edit){
      axios.get(`/api/items/${this.props.location.state.item}`)
    }
  }
  
  render()
  {
    return(
      <>
        <Form>
          <input/>
        </Form>
      </>
    )
  }
}

export default ReviewForm