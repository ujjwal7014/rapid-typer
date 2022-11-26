import React, { useState, useEffect } from 'react'
import ParagraphBox from '../../components/ParagraphBox/ParagraphBox'

export default function GameArena() {
  const fetchedParagraph = {
    para: "ujjwal is a great guy he CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.The interactive example below demonstrates s"
  }
  const [paragraph, setParagraph] = useState('')
  const [userTypedText, setUserTypedText] = useState()

  useEffect(() => {
    setParagraph(fetchedParagraph.para)
  }, [])

  return (
    <div>
      <ParagraphBox
        paragraph={paragraph || ''}
        userTypedText={userTypedText || ''}
      />
    </div>
  )
}
