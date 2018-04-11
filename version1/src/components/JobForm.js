import React from 'react'


class JobForm extends React.Component {

  onSubmit = (event) => {
    event.preventDefault()
      this.props.onJobSubmit(<li key = {this.refs.title.value}>
                              <h4>{this.refs.title.value}</h4>
                              <small>{this.refs.pay.value}</small>
                              <p>{this.refs.description.value}</p>
                              <small>0 dinos are interested in this job</small>
                            </li>
                          )
      this.refs.title.value = ''
      this.refs.pay.value = ''
      this.refs.description.value = ''
  }

  render(){
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form  onSubmit = {this.onSubmit} className="job-form">
          <label htmlFor="title">Title</label>
          <input ref = "title" type="text" name="title"/>
          <label htmlFor="pay">Compensation</label>
          <input  ref = "pay" type="text" name="pay"/>
          <label htmlFor="description">Description</label>
          <textarea ref = "description" name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>

    )
  }
}

export default JobForm
