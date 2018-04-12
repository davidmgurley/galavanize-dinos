import React from 'react';
import Profiles from './Profiles'


const SkillList = (props) => {

  const skills = props.profiles.map(profile => {
    return <Profiles onClick = {props.onClick}
                     key = {profile.name}
                     name = {profile.name}
                     image = {profile.image}
                     skills = {profile.skills}/>
  })



  return (
  <main>
    <section id="profiles-container">
      <h2>Profiles</h2>
      <ul id="profiles">
        {skills}
      </ul>
    </section>
  </main>
  )
}

export default SkillList
