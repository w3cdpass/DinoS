// src/components/common/Navbar.jsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4">
            {/* Logo/Brand */}
            <div>
              <Link 
                href="/" 
                className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-500"
              >
                <span className="font-bold text-lg">YourLogo</span>
              </Link>
            </div>
            
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className="py-2 px-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded transition duration-300"
              >
                Home
              </Link>
              {!user && (
                <>
                  <Link 
                    href="/login" 
                    className="py-2 px-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded transition duration-300"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/register" 
                    className="py-2 px-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded transition duration-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Welcome, {user.name}
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;