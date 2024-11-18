import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">游戏天地</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#" active>首页</NavLink>
            <NavLink href="#">游戏</NavLink>
            <NavLink href="#">排行榜</NavLink>
            <NavLink href="#">关于</NavLink>
          </div>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            开始游戏
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => {
  return (
    <a
      href={href}
      className={`text-sm font-medium ${
        active
          ? 'text-purple-600'
          : 'text-gray-600 hover:text-purple-600'
      } transition-colors`}
    >
      {children}
    </a>
  );
};

export default Navbar;