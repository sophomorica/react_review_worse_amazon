import React from 'react'
import axios from 'axios'
import {Container, Button, Card, Grid, Image, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import styled from 'styled-components'


class Departments extends React.Component{
  state = {deps: []}

  componentDidMount(){
    axios.get('/api/departments')
    .then(res=>{
      this.setState({deps: res.data})
    })
    .catch(err =>{
      console.log(err.response)
    })
  }
  showDeps = () =>{
    return this.state.deps.map(d =>(
      <Link to={`departments/${d.id}`}>
        <div styles={{padding: "20px", border: '2px solid black' }}>
          <CardStyles>
            <Card.Header
            style={{fontSize: '20px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
          }}>
              {d.name}
            </Card.Header>
            <Card.Content
            style={{
              display:'flex',
              justifyContent:'center',
              alignItems: 'center',
            }}
            >
              <Image style={{
                height: '120px',
                width: '160px'
              }}
              src={'https://loremflickr.com'}
              />
            </Card.Content>
          </CardStyles>
        </div>
      </Link>
    ))
  }
  render(){
    return(
      <Page>
        <Container>
          <ButtonStyle>
              <Link to ='departments/new'>
                <Button inverted color='green'>
                  <Icon name="add"/>
                  Add Department
                </Button>
              </Link>
          </ButtonStyle> 
          <Grid>
            <Grid.Row>
              <Grid.Column relaxed columns={4}>
                  <Card.Group>
                  {this.showDeps()}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Page>
     
    )
  }
}

const CardStyles = styled(Card)`
height: 200px;
width: 180px;
`
const CardGroup = styled(Card.Group)`
padding: 40px;
display:flex;
justify-content: center
`
const Page = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`
const ButtonStyle = styled.div`
display:flex;
justify-content:center;
padding: 20px
`
export default Departments