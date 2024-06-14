import React from 'react'

function About(props) {

  const image = "I-love-JavaScript.png"
  return (
    <>
        <div className="alert alert-warning alert-dismissible fade show">
            <strong>{props.Alert}</strong>
            <img src={image} className="img-fluid" alt="I-love-JavaScript" width="100px" height="100px" />
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> 
        </>
  )
}

export default About
