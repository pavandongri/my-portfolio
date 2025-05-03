import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <nav className="bg-gray-50 dark:bg-gray-950 shadow-md sticky top-0 z-50 relative">
      <div className="mx-auto px-[10%] py-6 flex items-center justify-between">
        <div className="w-1/12 text-lg font-bold text-gray-800 dark:text-white">
          Portfolio
        </div>

        <ul className="hidden md:flex w-10/12 justify-center space-x-20 text-gray-700 dark:text-gray-200">
          {menuItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-1/12 flex justify-end items-center space-x-3 text-gray-600 dark:text-gray-300">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-gray-50/70 dark:bg-gray-950/70 px-6 pb-4 space-y-4 text-center z-40">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500 font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;