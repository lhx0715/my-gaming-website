import React from 'react';
import { Users, Heart } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  status: string;
  players: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, image, status, players }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {status}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="text-sm">{players} 玩家</span>
          </div>
          
          <button className="flex items-center space-x-1 text-pink-500 hover:text-pink-600 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">收藏</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;