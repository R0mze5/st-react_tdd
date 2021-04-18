import styles from './App.module.css';
import { Quote } from './Components/Quote';

export function App() {
  return (
    <main className={styles.main}>
      <Quote></Quote>
    </main>
  );
}

export default App;
