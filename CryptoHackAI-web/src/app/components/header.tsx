'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
//import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/tools', label: 'Tools' },
  { path: '/about', label: 'About' },
];

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false); // For avatar dropdown menu
  const pathname = usePathname();

  /*  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await //supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []); */

  const handleSignOut = async () => {
    //wait supabase.auth.signOut();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="w-full bg-teal-600 backdrop-blur-lg text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Section: Brand Name */}
        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Link href="/">
            <Image
              src="/CytpStarkLogo-removebg.png"
              alt="Travel Wise Logo"
              width={52}
              height={52}
              className="mr-2 hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Right Section: Navigation and Avatar/Login */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map(({ path, label }) => {
              const active =
                pathname === path || pathname.startsWith(`${path}/`);
              return (
                <Link
                  key={path} // <-- Added key prop
                  href={path}
                  className={`text-base p-2 rounded-lg ${
                    active
                      ? 'bg-white text-neutral-900'
                      : 'hover:underline hover:scale-105'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Avatar or Login Button */}
          <div className="relative">
            {user ? (
              <button
                onClick={() => setAvatarMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <Image
                  src={user?.user_metadata?.avatar_url || '/default-avatar.png'}
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full hover:scale-105 transition-transform"
                />
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden md:flex justify-center w-[178px] h-fit gap-3 text-base font-normal bg-neutral-800 rounded-lg p-2 "
              >
                Connect
              </Link>
            )}

            {/* Dropdown Menu for Avatar */}
            {user && avatarMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-2xl font-bold"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-teal-700 rounded mt-2 p-4">
          <ul className="space-y-2">
            {navLinks.map(({ path, label }) => (
              <li key={path}> {/* <-- Added key prop */}
                <Link href={path} className="block text-white hover:underline font-bold">
                  {label}
                </Link>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <Link
                    href="/settings"
                    className="block text-white hover:underline font-bold"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left text-white hover:underline font-bold"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="block text-white hover:underline font-bold"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
