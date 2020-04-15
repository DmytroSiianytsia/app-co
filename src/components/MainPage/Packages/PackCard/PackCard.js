import React from 'react'
import './packCard.css'
import Button from '../../Button/Button'

export default function Card({ img, title, text, price }) {
  return (
    <div className="packCard">
      <h3 className="packCard__title">{title}</h3>
      <img className="packCard__img" src={img} alt={title} />
      <div className="packCard__price">{price}</div>
      <div className="packCard__hr"></div>
      <p className="packCard__text">{text}</p>
      <Button title="Purchase now" modClass="packages_mod" />
    </div>
  )
}
