import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import type { ReactNode } from 'react';
// @ts-expect-error I don' know why ?
import href from '../client.css?url';
import Layout from '../components/root/layout';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [{ rel: 'stylesheet', href }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <Meta />
      </head>
      <body className='py-5 px-3 min-h-full flex flex-1 flex-col space-y-8'>
        <Layout />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
