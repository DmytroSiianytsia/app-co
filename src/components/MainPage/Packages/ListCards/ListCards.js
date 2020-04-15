import React from 'react'
import { dataCards } from './dataCards'
import PackCard from '../PackCard/PackCard'
import './listCards.css'

export default function ListCards() {
  const listCards = dataCards.map(({ img, title, text, price }) => {
    return (
      <PackCard
        title={title}
        img={img}
        price={price}
        text={text}
        key={title}
      />
    )
  })
  return (
    <div className="listCards">
      {listCards}
    </div>
  )
}
