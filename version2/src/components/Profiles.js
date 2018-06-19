import React from 'react'


const Profile = (props) => {
  return (
    <li>
      <div className = 'profile-card'>
        <header className = 'profile-header'>
          <img onClick={(event) => {props.onClick(event)}} src={props.image} alt = "" />
          <h2 onClick={(event) => {props.onClick(event)}}>{props.name}</h2>
        </header>
        <section className = 'skills-container hidden'>
          <h4>Skills</h4>
            <ul className = 'skills-list'>
              {props.skills.map(skill => {
                return <li key={skill}>{skill}</li>
              })}
            </ul>
        </section>
      </div>
    </li>
  )
}

export default Profile
