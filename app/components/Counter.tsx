'use client';
import { useState } from 'react';

const useCounter = (initial = 0) => {
  const [value, setValue] = useState(initial);

  const increment = (inc = 1) => setValue((count) => count + inc);
  const decrement = (dec = 1) => setValue((count) => count - dec);
  const reset = (initial = 0) => setValue(initial);

  return { value, increment, decrement, reset };
};

export const Counter = () => {
  const { value, increment } = useCounter(35);

  return (
    <button
      onClick={() => {
        increment();
      }}
      className='border-2 border-red-600 px-3 py-1.5 rounded-lg'
    >
      You clicked {value} times
    </button>
  );
};
