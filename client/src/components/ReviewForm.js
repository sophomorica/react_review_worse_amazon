import React from 'react'
import axios from 'axios'
import { Form, Rating, Dropdown } from 'semantic-ui-react'


class ReviewForm extends React.Component{
  state = {title: '',body:'', author:'', rating:0, image_url:'' }


  componentDidMount(){
    if(this.props.edit){
      axios.get(`/api/items/${this.props.location.state.item_id}/${this.props.match.params.id}`)
        .then(res=>{
          this.setState({...res.data})
        })
    }
  }
  
  handleChange = ({target: {name, value}})=>{
    this.setState({[name]:value})
  }

  handleRating = (e, {rating}) =>{
    this.setState({raiting})
  }

  handleImage = (e)=>{
    const image_url = e.target.currentSrc
    this.setState({image_url})
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