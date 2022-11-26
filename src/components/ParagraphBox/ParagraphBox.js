import './style.css';
import React from 'react'

export default function ParagraphBox({ paragraph, userTypedText }) {
  console.log("paragraph is ", paragraph)
  return (
    <div className='paragraph-wrapper'>
      <div className='paragraph-container' >
        <span>{paragraph || 'nothing'}</span>
      </div>
    </div>
  )
}
