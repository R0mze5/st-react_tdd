import React from "react";

import styles from "./Quote.module.css";

import { selectRandomQuote } from "./selectRandomQuote";
import quotes from "./quotes.json";

const defaultQuote = selectRandomQuote(quotes);

interface Props {
  quote?: typeof defaultQuote;
}

export const Quote: React.FC<Props> = ({ quote = defaultQuote }) => {
  const { text, author } = quote;

  return (
    <footer className={styles.quote}>
      <blockquote>{text}</blockquote>
      <cite className={styles.author}>- {author}</cite>
    </footer>
  );
};
