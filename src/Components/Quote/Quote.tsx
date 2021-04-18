import React from 'react'

import quotes from './quotes.json'
import styles from './Quote.module.css'

interface Props {
  
}

export const Quote:React.FC<Props> = (props) => {
  const {text, author} = quotes[0]
  return (
    <footer className={styles.quote}>
    <blockquote>
     { text}
    </blockquote>
    <cite className={styles.author}>- {author}</cite>
    </footer>
  )
}
