import React from 'react';
import { Gamepad2, Sparkles, Trophy, Users, Heart } from 'lucide-react';
import GameCard from './components/GameCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const games = [
    {
      title: "像素冒险",
      description: "一个充满挑战的2D平台跳跃游戏，探索神秘世界。",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=600",
      status: "热门",
      players: "1,234"
    },
    {
      title: "方块消除",
      description: "考验反应和策略的经典消除游戏，简单但令人上瘾。",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=800&h=600",
      status: "新游戏",
      players: "856"
    },
    {
      title: "数字迷宫",
      description: "智力挑战游戏，通过解谜探索数字世界。",
      image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800&h=600",
      status: "经典",
      players: "2,567"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            我的游戏天地
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            欢迎来到我的游戏世界！这里收集了我开发的一系列有趣小游戏，希望能带给你快乐的游戏体验。
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">游戏特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Gamepad2 className="w-8 h-8 text-purple-500" />}
              title="简单操作"
              description="容易上手的游戏操作"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-blue-500" />}
              title="精美画面"
              description="独特的视觉体验"
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8 text-yellow-500" />}
              title="成就系统"
              description="丰富的游戏成就"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-green-500" />}
              title="多人互动"
              description="社交游戏体验"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

export default App;