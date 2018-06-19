import React from 'react'

const Preview = (props) => {
  return (
    <div>
      <p id="message">&nbsp;</p>
      <button id="preview-toggle" onClick={props.previewButton}>Show Preview</button>
      <section id="application-preview" hidden={props.isHidden}>{props.preview}</section>
    </div>
  )
}

export default Preview
