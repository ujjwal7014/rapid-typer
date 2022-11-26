import React, { useState, useEffect } from 'react'
import ParagraphBox from '../../components/ParagraphBox/ParagraphBox'

export default function GameArena() {
  const [paragraph, setParagraph] = useState()
  const [userTypedText, setUserTypedText] = useState()

  useEffect(() => {
    let fetchedParagraph = {para : "ujjwal is a great guy"}
    setParagraph(fetchedParagraph.para)
  }, [])

  return (
    <div>
      <ParagraphBox
        pargraph={paragraph || {}}
        userTypedText={userTypedText || ''}
      />
    </div>
  )
}
