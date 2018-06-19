import React from 'react'

const InputForm = (props) => {
  return (
    <form id="application-input">
    <label>Apply Here: </label>
    <textarea onKeyUp={(event) => {props.onKeyUp(event)}} id="application-text" rows="8" cols="100"></textarea>
    <input id="submit" type="submit" value="Submit" onClick={(event) => {props.onClick(event)}} />
    <p id="message">{props.returnMessage}</p>
    </form>
  )
}

export default InputForm
