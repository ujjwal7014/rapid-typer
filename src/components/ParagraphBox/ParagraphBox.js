import './style.css';
import React from 'react'

export default function ParagraphBox(paragraph, userTypedText) {
  const random = Math.floor(Math.random() * paragraph.length);
  console.log(random, paragraph[random][0]);

  return (
    <div className='paragraph-container'>
      <span>{paragraph}</span>
    </div>
  )
}
