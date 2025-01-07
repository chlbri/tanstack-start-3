import { getRouteApi } from '@tanstack/react-router';
import type { FC } from 'react';
import { Counter } from '../components/Counter';

const api = getRouteApi('/');

export const Home: FC = () => {
  return <Counter />;
};
