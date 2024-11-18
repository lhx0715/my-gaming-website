import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-2">游戏天地</h3>
            <p className="text-gray-600 text-sm">
              打造有趣的游戏体验 © {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-purple-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;