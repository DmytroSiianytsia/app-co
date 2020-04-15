import React from 'react'
import './packages.css'
import ListCards from './ListCards/ListCards'

export default function Packages() {
  return (
    <section className="packages">
      <div className="container">
        <div className="packages__content">
          <h2 className="packages__title">
            <b>Afforadble Pricing and Packages</b><br/>
            choose your best one
          </h2>
          <h4 className="packages__subtitle">
            Monotonectally grow strategic process
            improvements vis-a-vis integrated resources.
          </h4>
          <ListCards />
          <h4 className="packages__footer">
            If you need custom services or Need more?
            <span className="packages__link"> Contact us</span>
          </h4>
        </div>
      </div>
    </section>
  )
}
