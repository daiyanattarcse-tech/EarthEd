import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Target, 
  Brain, 
  Trophy, 
  Users, 
  Leaf, 
  Recycle, 
  Zap,
  Globe,
  Award,
  TrendingUp,
  Heart,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const Home: React.FC = () => {
  const { user } = useGame();

  const features = [
    {
      icon: Play,
      title: 'Interactive Games',
      description: 'Engage with fun environmental puzzles, crosswords, and matching games that make learning about sustainability exciting and memorable.',
      link: '/play',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Real-World Missions',
      description: 'Complete hands-on environmental missions like planting trees and mastering waste sorting to make a tangible impact.',
      link: '/missions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Knowledge Quizzes',
      description: 'Test your environmental knowledge with comprehensive quizzes covering climate change, conservation, and sustainable living.',
      link: '/quiz',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Trophy,
      title: 'Global Leaderboard',
      description: 'Compete with eco-warriors worldwide, earn badges, and climb the rankings as you become an environmental champion.',
      link: '/leaderboard',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Eco-Warriors', color: 'text-blue-600' },
    { icon: Leaf, value: '1,000,000+', label: 'Trees Planted', color: 'text-green-600' },
    { icon: Recycle, value: '500,000+', label: 'Items Recycled', color: 'text-emerald-600' },
    { icon: Zap, value: '2,500,000+', label: 'Points Earned', color: 'text-yellow-600' }
  ];

  const achievements = [
    { icon: '🌱', title: 'Carbon Footprint Reduced', value: '75%', description: 'Average reduction by active users' },
    { icon: '♻️', title: 'Recycling Rate Improved', value: '90%', description: 'Users report better sorting habits' },
    { icon: '🌍', title: 'Environmental Awareness', value: '95%', description: 'Increased knowledge retention' },
    { icon: '🏆', title: 'Community Impact', value: '100K+', description: 'Real-world actions taken' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Save Our Planet Through
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Gamified Learning
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed">
                Join millions of eco-warriors in the ultimate environmental education adventure. 
                Learn, play, and make a real difference for our planet's future.
              </p>
              
              {/* User Stats Display */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-green-100">Your Progress</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-5 h-5 text-yellow-300 mr-1" />
                      <span className="text-2xl font-bold">{user.points}</span>
                    </div>
                    <p className="text-sm text-green-200">Points</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="w-5 h-5 text-blue-300 mr-1" />
                      <span className="text-2xl font-bold">{user.level}</span>
                    </div>
                    <p className="text-sm text-green-200">Level</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 text-purple-300 mr-1" />
                      <span className="text-2xl font-bold">{user.badges.length}</span>
                    </div>
                    <p className="text-sm text-green-200">Badges</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/play"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Playing Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <Globe className="w-24 h-24 mx-auto text-green-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
                  <p className="text-green-100">Real change starts with education</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-green-300" />
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-sm text-green-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Leaf className="w-8 h-8 text-green-800" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Recycle className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Discover Your
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Eco-Adventure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Embark on an interactive journey that transforms environmental education into an engaging, 
              rewarding experience. Every action you take contributes to a more sustainable future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={feature.link} className="block">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Measuring Our
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Global Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our community of eco-warriors is making a real difference in environmental conservation and education worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{achievement.value}</div>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-300" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Join thousands of eco-warriors who are already making a positive impact on our planet. 
              Every game played, every mission completed, and every quiz answered brings us closer to a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Free to Play</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Real Impact</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Global Community</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/play"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Your Journey
              </Link>
              <Link
                to="/missions"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                <Target className="w-5 h-5 mr-2" />
                View Missions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;