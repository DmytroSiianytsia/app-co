import React from 'react'
import Button from '../Button/Button'
import comp from './img/comp.png'
import './blueBlock.css'

export default function BlueBlock() {
  return (
    <section className="blue-block">
      <div className="container">
        <div className="blue-block__content">
          <div className="blue-block__text">
            <h2 className="blue-block__title">
              Start Managing your apps business, more faster
            </h2>
            <p className="blue-block__text">
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition  wireless customer service without<br />
              goal-oriented catalysts for change. Collaboratively.
            </p>
            <Button title="Learn more" modClass="blueBlock_mod" />
          </div>
          <div className="blue-block__img">
            <img src={comp} alt="computer" className="blue-block__img-comp" />
          </div>
        </div>
      </div>
    </section>
  )
}
