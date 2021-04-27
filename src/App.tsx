import styles from "./App.module.css";
import { Quote } from "./components/Quote";
import { Converter } from "./components/Converter";

export function App(): JSX.Element {
  return (
    <main className={styles.main}>
      <Converter />
      <Quote />
    </main>
  );
}

export default App;
