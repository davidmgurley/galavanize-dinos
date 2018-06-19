import React, { Component } from 'react'
import Header from './components/Header'
import SkillList from './components/SkillList'
import Footer from './components/Footer'
import './Profile.css'

const apiUrl = './dinosaurs.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { profiles: []}
  }

  componentDidMount(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        profiles: data
      })
    })
  }

  onClick = (event) => {
    let profile = event.target.parentNode.parentNode.childNodes[1]
    {profile.className === 'skills-container hidden' ? profile.className = 'skills-container' : profile.className = 'skills-container hidden'}

  }

  render() {
    return (
      <div>
        <Header />
        <SkillList onClick = {this.onClick} profiles={this.state.profiles}/>
        <Footer />
      </div>
    )
  }
}

export default App
