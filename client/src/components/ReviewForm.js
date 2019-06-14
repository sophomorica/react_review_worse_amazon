import React from 'react'
import axios from 'axios'
import { Form, Rating, Dropdown, ItemImage } from 'semantic-ui-react'


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
    this.setState({rating})
  }

  handleImage = (e)=>{
    const image_url = e.target.currentSrc
    this.setState({ image_url })
  }
  dropdownImageSelect = () =>{
    const {image_url} = this.state
    const images = [
      {
        text: 'blue',
        value: 'https://robohash.org/sitsequiquia.png?size=300x300&set=set1',
        image:{
          avatar: true,
          src: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
        },
      },
      {
        text: 'purple',
        value: 'https://robohash.org/sitsequiquia.png?size=300x300&set=set2',
        image:{
          avatar: true,
          src: "https://robohash.org/sitsequiquia.png?size=300x300&set=set2"
        },
      },
      {
        text: 'green',
        value: 'https://robohash.org/sitsequiquia.png?size=300x300&set=set3',
        image:{
          avatar: true,
          src: "https://robohash.org/sitsequiquia.png?size=300x300&set=set3"
        },
      },
    ]
    return(
      <Dropdown
      name='image'
      placeholder="Select an Avatar"
      compact
      options={images}
      value = {image_url}
      onChange={this.handleImage}
      />
    )
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if (this.props.edit){
      const {match: {params: {id}}}= this.props
      const {location: {state:{item_id} }} = this.props
      axios.put(`/api/items/${item_id}/reviews/${id}`, {...this.state})
        .then(res =>{
          this.props.history.goBack()
        })

    } else{
      axios.post(`/api/items/${item_id}/reviews`, {...this.state})
        .then(res=> this.props.addReview(res.data))
        this.props.toggle()
        
    }
  }

  render(){

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