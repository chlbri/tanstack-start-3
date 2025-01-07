import { createFileRoute } from '@tanstack/react-router';
import { getCount } from '../functions';
import { Home } from './index.component';

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
});
