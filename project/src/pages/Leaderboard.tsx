import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  Star, 
  Crown, 
  Award, 
  TrendingUp,
  Users,
  Target,
  Zap,
  Calendar,
  Filter,
  Search
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const Leaderboard: React.FC = () => {
  const { user } = useGame();
  const [activeTab, setActiveTab] = useState<'global' | 'weekly' | 'achievements'>('global');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock leaderboard data - in a real app, this would come from an API
  const globalLeaderboard = [
    { 
      rank: 1, 
      name: 'EcoChampion2024', 
      points: 2850, 
      level: 29, 
      badges: 15, 
      avatar: '🌟',
      streak: 45,
      country: 'USA'
    },
    { 
      rank: 2, 
      name: 'GreenWarrior', 
      points: 2720, 
      level: 28, 
      badges: 14, 
      avatar: '🌱',
      streak: 38,
      country: 'Canada'
    },
    { 
      rank: 3, 
      name: 'TreeHugger99', 
      points: 2650, 
      level: 27, 
      badges: 13, 
      avatar: '🌳',
      streak: 42,
      country: 'Germany'
    },
    { 
      rank: 4, 
      name: 'SolarPowered', 
      points: 2580, 
      level: 26, 
      badges: 12, 
      avatar: '☀️',
      streak: 35,
      country: 'Australia'
    },
    { 
      rank: 5, 
      name: 'RecycleKing', 
      points: 2450, 
      level: 25, 
      badges: 11, 
      avatar: '♻️',
      streak: 29,
      country: 'UK'
    },
    { 
      rank: 6, 
      name: 'ClimateHero', 
      points: 2380, 
      level: 24, 
      badges: 10, 
      avatar: '🌍',
      streak: 33,
      country: 'France'
    },
    { 
      rank: 7, 
      name: 'OceanSaver', 
      points: 2290, 
      level: 23, 
      badges: 9, 
      avatar: '🌊',
      streak: 27,
      country: 'Japan'
    },
    { 
      rank: 8, 
      name: 'WindPower', 
      points: 2180, 
      level: 22, 
      badges: 8, 
      avatar: '💨',
      streak: 31,
      country: 'Denmark'
    },
    { 
      rank: 9, 
      name: 'EcoExplorer', 
      points: 2050, 
      level: 21, 
      badges: 7, 
      avatar: '🔍',
      streak: 24,
      country: 'Brazil'
    },
    { 
      rank: 10, 
      name: 'GreenThumb', 
      points: 1980, 
      level: 20, 
      badges: 6, 
      avatar: '👍',
      streak: 28,
      country: 'Netherlands'
    },
    // Add current user to show their position
    { 
      rank: 1247, 
      name: user.name, 
      points: user.points, 
      level: user.level, 
      badges: user.badges.length, 
      avatar: '🌿',
      streak: user.streak,
      country: 'Your Country',
      isCurrentUser: true
    }
  ];

  const weeklyLeaderboard = [
    { rank: 1, name: 'WeeklyChamp', points: 450, level: 15, badges: 3, avatar: '⚡', streak: 7, country: 'Sweden' },
    { rank: 2, name: 'FastLearner', points: 420, level: 14, badges: 3, avatar: '🚀', streak: 6, country: 'Norway' },
    { rank: 3, name: 'QuickGreen', points: 380, level: 13, badges: 2, avatar: '💚', streak: 5, country: 'Finland' },
    { rank: 4, name: 'SpeedyEco', points: 350, level: 12, badges: 2, avatar: '🏃', streak: 4, country: 'Iceland' },
    { rank: 5, name: 'RapidRecycle', points: 320, level: 11, badges: 2, avatar: '🔄', streak: 3, country: 'Switzerland' },
  ];

  const achievements = [
    {
      category: 'Learning Milestones',
      badges: [
        { name: 'First Steps', icon: '🌱', description: 'Complete your first mission', rarity: 'Common', earned: 45000 },
        { name: 'Quiz Master', icon: '🧠', description: 'Score 100% on any quiz', rarity: 'Rare', earned: 12000 },
        { name: 'Game Champion', icon: '🏆', description: 'Play all three games', rarity: 'Epic', earned: 8500 },
        { name: 'Knowledge Seeker', icon: '📚', description: 'Complete 10 quizzes', rarity: 'Rare', earned: 15000 },
      ]
    },
    {
      category: 'Environmental Impact',
      badges: [
        { name: 'Tree Planter', icon: '🌳', description: 'Complete the Plant a Tree mission', rarity: 'Uncommon', earned: 25000 },
        { name: 'Waste Warrior', icon: '♻️', description: 'Master waste sorting', rarity: 'Uncommon', earned: 22000 },
        { name: 'Carbon Crusher', icon: '🌍', description: 'Learn about carbon footprint reduction', rarity: 'Epic', earned: 7500 },
        { name: 'Ocean Guardian', icon: '🌊', description: 'Complete ocean conservation missions', rarity: 'Legendary', earned: 3200 },
      ]
    },
    {
      category: 'Community & Engagement',
      badges: [
        { name: 'Eco Expert', icon: '🎓', description: 'Reach 1000 points', rarity: 'Rare', earned: 18000 },
        { name: 'Streak Master', icon: '🔥', description: 'Maintain a 30-day streak', rarity: 'Epic', earned: 5500 },
        { name: 'Community Leader', icon: '👑', description: 'Help 100 other users', rarity: 'Legendary', earned: 1200 },
        { name: 'Global Impact', icon: '🌟', description: 'Reach top 100 globally', rarity: 'Mythic', earned: 450 },
      ]
    }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-600 bg-gray-100';
      case 'Uncommon': return 'text-green-600 bg-green-100';
      case 'Rare': return 'text-blue-600 bg-blue-100';
      case 'Epic': return 'text-purple-600 bg-purple-100';
      case 'Legendary': return 'text-orange-600 bg-orange-100';
      case 'Mythic': return 'text-pink-600 bg-pink-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredLeaderboard = (activeTab === 'global' ? globalLeaderboard : weeklyLeaderboard)
    .filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Global Leaderboard
            <span className="block text-2xl lg:text-3xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-normal mt-2">
              Compete with Eco-Warriors Worldwide
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how you rank against environmental champions from around the globe. 
            Climb the leaderboard by completing missions, playing games, and taking quizzes!
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">#{user.points > 0 ? '1,247' : 'Unranked'}</div>
            <div className="text-sm text-gray-600">Your Global Rank</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{user.points}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{user.badges.length}</div>
            <div className="text-sm text-gray-600">Badges Earned</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{user.streak}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex space-x-2">
            {[
              { id: 'global', label: 'Global Rankings', icon: Trophy },
              { id: 'weekly', label: 'Weekly Leaders', icon: Calendar },
              { id: 'achievements', label: 'Achievements', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {activeTab !== 'achievements' && (
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search players..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        {activeTab === 'global' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top 3 Podium */}
            <div className="mb-12">
              <div className="flex justify-center items-end space-x-4 mb-8">
                {/* 2nd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 border-2 border-gray-200">
                    <div className="text-4xl mb-3">{globalLeaderboard[1].avatar}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{globalLeaderboard[1].name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{globalLeaderboard[1].country}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{globalLeaderboard[1].points}</span>
                    </div>
                    <div className="text-xs text-gray-500">Level {globalLeaderboard[1].level}</div>
                  </div>
                  <div className="w-16 h-12 bg-gray-300 rounded-t-lg flex items-center justify-center">
                    <Medal className="w-6 h-6 text-gray-600" />
                  </div>
                </motion.div>

                {/* 1st Place */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-xl p-6 mb-4 border-2 border-yellow-300">
                    <div className="text-5xl mb-3">{globalLeaderboard[0].avatar}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{globalLeaderboard[0].name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{globalLeaderboard[0].country}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{globalLeaderboard[0].points}</span>
                    </div>
                    <div className="text-xs text-gray-500">Level {globalLeaderboard[0].level}</div>
                  </div>
                  <div className="w-16 h-16 bg-yellow-400 rounded-t-lg flex items-center justify-center">
                    <Crown className="w-8 h-8 text-yellow-800" />
                  </div>
                </motion.div>

                {/* 3rd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 border-2 border-gray-200">
                    <div className="text-4xl mb-3">{globalLeaderboard[2].avatar}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{globalLeaderboard[2].name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{globalLeaderboard[2].country}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{globalLeaderboard[2].points}</span>
                    </div>
                    <div className="text-xs text-gray-500">Level {globalLeaderboard[2].level}</div>
                  </div>
                  <div className="w-16 h-10 bg-amber-600 rounded-t-lg flex items-center justify-center">
                    <Medal className="w-6 h-6 text-amber-800" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Full Leaderboard */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
                <h2 className="text-2xl font-bold text-white">Global Rankings</h2>
                <p className="text-green-100">Top eco-warriors from around the world</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {filteredLeaderboard.map((player, index) => (
                  <motion.div
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`p-6 hover:bg-gray-50 transition-colors ${
                      player.isCurrentUser ? 'bg-green-50 border-l-4 border-green-500' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12">
                          {getRankIcon(player.rank)}
                        </div>
                        
                        <div className="text-3xl">{player.avatar}</div>
                        
                        <div>
                          <h3 className={`font-bold ${player.isCurrentUser ? 'text-green-700' : 'text-gray-900'}`}>
                            {player.name}
                            {player.isCurrentUser && <span className="ml-2 text-sm text-green-600">(You)</span>}
                          </h3>
                          <p className="text-sm text-gray-600">{player.country}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-bold text-gray-900">{player.points}</span>
                          </div>
                          <div className="text-xs text-gray-500">Points</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            <Zap className="w-4 h-4 text-blue-500" />
                            <span className="font-bold text-gray-900">{player.level}</span>
                          </div>
                          <div className="text-xs text-gray-500">Level</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4 text-purple-500" />
                            <span className="font-bold text-gray-900">{player.badges}</span>
                          </div>
                          <div className="text-xs text-gray-500">Badges</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-red-500" />
                            <span className="font-bold text-gray-900">{player.streak}</span>
                          </div>
                          <div className="text-xs text-gray-500">Streak</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'weekly' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
              <h2 className="text-2xl font-bold text-white">Weekly Leaders</h2>
              <p className="text-blue-100">Top performers this week</p>
            </div>
            
            <div className="divide-y divide-gray-100">
              {weeklyLeaderboard.map((player, index) => (
                <motion.div
                  key={player.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(player.rank)}
                      </div>
                      
                      <div className="text-3xl">{player.avatar}</div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900">{player.name}</h3>
                        <p className="text-sm text-gray-600">{player.country}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-bold text-gray-900">{player.points}</span>
                        </div>
                        <div className="text-xs text-gray-500">This Week</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center space-x-1">
                          <Zap className="w-4 h-4 text-blue-500" />
                          <span className="font-bold text-gray-900">{player.level}</span>
                        </div>
                        <div className="text-xs text-gray-500">Level</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-red-500" />
                          <span className="font-bold text-gray-900">{player.streak}</span>
                        </div>
                        <div className="text-xs text-gray-500">Streak</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {achievements.map((category, categoryIndex) => (
              <div key={category.category} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.badges.map((badge, badgeIndex) => (
                      <motion.div
                        key={badge.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (badgeIndex * 0.05) }}
                        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                      >
                        <div className="text-4xl">{badge.icon}</div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-bold text-gray-900">{badge.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(badge.rarity)}`}>
                              {badge.rarity}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Users className="w-3 h-3" />
                            <span>{badge.earned.toLocaleString()} earned</span>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          {user.badges.some(b => b.name === badge.name) ? (
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Trophy className="w-4 h-4 text-green-600" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                              <Target className="w-4 h-4 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;