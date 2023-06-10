import React from 'react'
import "../../assets/Cards.css";

const Cards = ({url,altDesc,description,readMore}) => {
    console.log('url',url)
  return (
    <div className="chat-room">
    <div className="card">
      <img
        className="image"
        src={url}
        alt={altDesc}
        width={100}
      />
      <p>
        {description}
      </p>
      <button className="button">{readMore}</button>
    </div>
  </div>
  )
}

export default Cards
