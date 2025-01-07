import type { Remap_F } from './types';

export const remap: Remap_F = (fn) => {
  const out = (...args: Parameters<typeof fn>) => {
    return () => fn(...args);
  };

  return out;
};
