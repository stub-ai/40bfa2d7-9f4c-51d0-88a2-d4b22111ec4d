import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">MyApp</a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          {/* Add more links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;