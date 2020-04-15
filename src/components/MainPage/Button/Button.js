import React from 'react'
import './button.css'

export default function Button({title, modClass = ''}) {
  return (
    <button className={`btn ${modClass}`}>
      {title}
    </button>
  )
}
