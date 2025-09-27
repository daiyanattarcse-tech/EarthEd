import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Gamepad2, 
  Target, 
  Brain, 
  Trophy, 
  Users, 
  Mail, 
  Menu, 
  X,
  Leaf,
  Star,
  Zap
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useGame();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Play Zone', href: '/play', icon: Gamepad2 },
    { name: 'Missions', href: '/missions', icon: Target },
    { name: 'Quiz', href: '/quiz', icon: Brain },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
              >
                <Leaf className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoQuest
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-green-100 text-green-700 shadow-md'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User Stats */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-700">{user.points}</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 rounded-full">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Level {user.level}</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-red-100 to-pink-100 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-red-700">{user.streak} day streak</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-green-100"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile User Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-green-100 mt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-semibold">{user.points} points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold">Level {user.level}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xl font-bold">EcoQuest</span>
              </div>
              <p className="text-green-100 mb-4 max-w-md">
                Empowering the next generation of environmental stewards through gamified learning experiences. 
                Join millions of eco-warriors making a difference, one quest at a time.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-green-200">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1M+</div>
                  <div className="text-sm text-green-200">Trees Planted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500K+</div>
                  <div className="text-sm text-green-200">Quizzes Completed</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-green-100 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                    Social Media
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-green-100 hover:text-white transition-colors duration-200">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200">
              © 2024 EcoQuest. All rights reserved. Made with 💚 for our planet.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;