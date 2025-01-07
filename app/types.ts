import type { Fn } from '@bemedev/types';

export type Remap_F = <P extends any[], R = any>(
  fn: Fn<P, R>,
) => (...args: P) => () => R;
