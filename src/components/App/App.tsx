import styles from './App.module.scss'
import { useEffect, useState } from "react";
import { stringService } from "../../services";

function App() {
  const [list, setList] = useState([])
  return (
    <div className={styles.app}>
      <h1>Title</h1>
    </div>
  );
}

export default App;