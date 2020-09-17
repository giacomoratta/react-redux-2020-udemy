import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  useEffect(() => {
    // not possible to have async fn as useEffect cb, so create doTranslation()
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            q: debouncedText, // text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM' /* not working :( */
          })
        setTranslated(data.data.translations[0].translatedText)
      } catch (e) {
        setTranslated('')
      }
    }
    doTranslation()
  }, [language, debouncedText])

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  )
}

export default Convert
