import React from 'react'

class JobList extends React.Component{


    render() {
      return(
        <section>
          <h2>Job Listings</h2>
          <ul id="job-listings">
            {this.props.listings}
          </ul>
        </section>

      )
    }
  }


export default JobList
