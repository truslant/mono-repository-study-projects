import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfigureCounter from './components/Counter/ConfigureCouter.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (enteredNumber) => {
    setChosenCount(enteredNumber)
  }


  return (
    <>
      <Header />
      <main>
        <ConfigureCounter handleSetCount={handleSetCount} />
        <Counter initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
