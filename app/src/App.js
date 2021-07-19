import { useState, useCallback, useMemo } from 'react';
import Count from './Count';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const data = useMemo(() => ({
    text2,
    isEven: text.length % 2 === 0
  }), [text2])

  const onOdd = useCallback(() => {
   setText('') 
  }, [setText])

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input placeholder='text2' value={text2} onChange={(e) => setText2(e.target.value)} />
      <Count onOdd={onOdd} data={data} />
    </div>
  );
}

export default App;
