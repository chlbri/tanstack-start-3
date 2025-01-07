import { createFileRoute } from '@tanstack/react-router';
import { Home } from '../components/Index';

export const Route = createFileRoute('/')({
  component: Home,
});
