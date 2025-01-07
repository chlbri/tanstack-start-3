import { createFileRoute } from '@tanstack/react-router';
import { Home } from './index.component';

export const Route = createFileRoute('/')({
  component: Home,
});
