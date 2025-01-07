import { Link } from '@tanstack/react-router';
import type { FC } from 'react';
// import '../index.css';

const Layout: FC = () => {
  const className = 'font-bold';
  return (
    <div className='p-2 flex space-x-2 text-lg pb-8 border-b-2 border-b-yellow-800 transition duration-150 ease-in'>
      <Link
        to='/'
        activeProps={{ className }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
      <Link to='/about' activeProps={{ className }}>
        About
      </Link>
      <Link to='/other' activeProps={{ className }}>
        Other
      </Link>
    </div>
  );
};

export default Layout;
