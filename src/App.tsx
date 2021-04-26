import styles from "./App.module.css";
import { Quote } from "./Components/Quote";
import { Converter } from "./Components/Converter";

export function App(): JSX.Element {
  return (
    <main className={styles.main}>
      <Converter />
      <Quote />
    </main>
  );
}

export default App;
