import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import JobDetails from './components/JobDetails'
import InputForm from './components/InputForm'
import Preview from './components/Preview'
import './Apply.css'

const apiUrl = './listing.json'


class App extends Component {
  constructor(props){
    super(props)
    this.state = { details: [] }
  }

  componentDidMount(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        details: data,
        input: '',
        returnMessage: '',
        isHidden: true
      })
    })
  }

  handleKeyUp = (event) => {
    var inputField = document.querySelector("#application-text")
    this.setState({input: inputField.value})
  }

  onClick = (event) => {
    this.setState({returnMessage: 'Your application was submitted!'})
    event.preventDefault()
  }

  toggleHidden = () => {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails details={this.state.details} />
          <InputForm onKeyUp={this.handleKeyUp} onClick={this.onClick} returnMessage={this.state.returnMessage}/>
          <Preview preview={this.state.input} isHidden={this.state.isHidden} previewButton={this.toggleHidden}/>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
