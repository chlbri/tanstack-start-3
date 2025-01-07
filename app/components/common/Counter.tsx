'use client';
import { useState } from 'react';
import { remap } from '../../utils';

const useCounter = (initial = 0) => {
  const [value, setValue] = useState(initial);

  const increment = remap((inc = 1) => setValue((count) => count + inc));
  const decrement = remap((dec = 1) => setValue((count) => count - dec));
  const reset = remap((initial = 0) => setValue(initial));

  return { value, increment, decrement, reset };
};

export const Counter = () => {
  const { value, increment } = useCounter(0);
  const onClick = increment();
  const className =
    'border-2 border-red-600 px-3 py-1.5 rounded-lg active:scale-95 active:bg-red-100 w-fit';

  const props = { onClick, className };

  return <button {...props}>You clicked {value} times</button>;
};
