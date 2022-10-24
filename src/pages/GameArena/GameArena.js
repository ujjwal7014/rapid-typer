import React, { useState } from 'react'
import ParagraphBox from '../../components/ParagraphBox/ParagraphBox'

export default function GameArena() {
  const [paragraph, setParagraph] = useState()

  let demoArr = [
    {
      para1: "ujjwal is agreat guy"
    }
  ]

  return (
    <div>
      <ParagraphBox
        pargraph={paragraph || demoArr}
        userTypedText={userTypedText || ''}
      />
    </div>
  )
}
