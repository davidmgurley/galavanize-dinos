import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import JobList from './components/JobList'
import JobForm from './components/JobForm'



class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      listings: []

    }
  }


  componentDidMount(){
    fetch('./listings.json')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      let listings = response.map(listing => {
        return (
          <li key = {listing.title}>
            <h4> {listing.title}</h4>
            <small> {listing.pay}</small>
            <p> {listing.description}</p>
            <small> `{listing.interested.length} dinos are interested in this position...`</small>
          </li>
        )
      })
      this.setState({listings: listings})
    })
      .catch(err => console.log(err.message))
    }

    onJobSubmit = (value) => {
      console.log(value)
      const newListings = this.state.listings.reverse().concat(value).reverse()
      this.setState({
        listings: newListings
      })
    }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList listings={this.state.listings}/>
          <JobForm onJobSubmit={this.onJobSubmit}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
