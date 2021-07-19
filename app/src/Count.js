import { useState, useRef, memo } from 'react';

const Count = memo(({ onOdd, data }) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  const setCountAndClearOnOdd = () => {
    if (count % 2 === 0) {
      onOdd();
    }
    setCount(count + 1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <span>renders: {renders.current++}</span>
      <span>count: {count}</span>
      <button onClick={setCountAndClearOnOdd}>increment</button>
    </div>
  )
});

export default Count;