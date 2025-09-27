import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Heart, 
  Globe, 
  Award, 
  BookOpen,
  Lightbulb,
  TreePine,
  Recycle,
  Star,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Environmental scientist with 15+ years in climate research and education technology.',
      avatar: '👩‍🔬',
      expertise: 'Climate Science'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Education',
      bio: 'Former teacher turned educational game designer, passionate about making learning fun.',
      avatar: '👨‍🏫',
      expertise: 'Educational Design'
    },
    {
      name: 'Aisha Patel',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in gamification and user experience design.',
      avatar: '👩‍💻',
      expertise: 'Technology'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Environmental Advisor',
      bio: 'Marine biologist and conservation expert with extensive field research experience.',
      avatar: '👨‍🔬',
      expertise: 'Conservation'
    }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe environmental education should reach every corner of the world, creating a global community of eco-warriors committed to positive change.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Accessible Learning',
      description: 'Education should be free, engaging, and accessible to everyone regardless of background, age, or location.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate our platform using the latest educational technology and gamification techniques.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Passion for Planet',
      description: 'Our deep love for the environment drives everything we do, from content creation to community building.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'EcoQuest Founded',
      description: 'Started with a simple idea: make environmental education fun and engaging through gamification.',
      icon: '🚀'
    },
    {
      year: '2021',
      title: 'First 10K Users',
      description: 'Reached our first major milestone with 10,000 active users completing environmental missions.',
      icon: '👥'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Launched in 15 countries with localized content and multi-language support.',
      icon: '🌍'
    },
    {
      year: '2023',
      title: '1M Trees Planted',
      description: 'Our community achieved the incredible milestone of planting 1 million trees worldwide.',
      icon: '🌳'
    },
    {
      year: '2024',
      title: '50K Active Users',
      description: 'Growing community of 50,000+ active eco-warriors making real environmental impact.',
      icon: '⭐'
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Users', color: 'text-blue-600' },
    { icon: Globe, value: '25', label: 'Countries', color: 'text-green-600' },
    { icon: TreePine, value: '1M+', label: 'Trees Planted', color: 'text-emerald-600' },
    { icon: Recycle, value: '500K+', label: 'Items Recycled', color: 'text-cyan-600' },
    { icon: Award, value: '100K+', label: 'Badges Earned', color: 'text-purple-600' },
    { icon: BookOpen, value: '250K+', label: 'Quizzes Completed', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About EcoQuest
              <span className="block text-2xl lg:text-3xl text-green-200 font-normal mt-2">
                Empowering Environmental Education Through Gamification
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to transform environmental education by making it interactive, 
              engaging, and accessible to everyone. Join our global community of eco-warriors 
              working together to create a sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To democratize environmental education by creating engaging, gamified learning experiences 
                that inspire real-world action. We believe that when learning is fun and rewarding, 
                people are more likely to adopt sustainable behaviors and become environmental advocates.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Make environmental education accessible to all</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Inspire real-world environmental action</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Build a global community of eco-warriors</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <Globe className="w-16 h-16 mx-auto text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  A world where every person has the knowledge, skills, and motivation to make 
                  environmentally conscious decisions. Through gamified education, we envision 
                  a future where sustainability is not just understood but actively practiced 
                  by communities worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every feature we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of educators, scientists, and technologists is united by a shared 
              passion for environmental conservation and innovative education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  {member.expertise}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Global Impact</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              See how our community is making a real difference in environmental education and conservation worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From a simple idea to a global platform making real environmental impact.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="text-3xl mb-3">{milestone.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white font-bold text-sm">{milestone.year}</span>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Educational Philosophy</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe that effective environmental education must be more than just information transfer. 
                It should inspire, engage, and empower learners to become active participants in environmental 
                conservation. Our gamified approach makes complex environmental concepts accessible and memorable.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Interactive Learning</h3>
                    <p className="text-gray-600">Hands-on activities and simulations that make abstract concepts tangible and understandable.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Progressive Mastery</h3>
                    <p className="text-gray-600">Structured learning paths that build knowledge systematically from basic to advanced concepts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Reward-Based Motivation</h3>
                    <p className="text-gray-600">Achievement systems that recognize progress and encourage continued learning and action.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <Lightbulb className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Learning Outcomes</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Increased environmental awareness</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Practical sustainability skills</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Motivation for environmental action</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Community engagement and leadership</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Ready to become part of the solution? Join thousands of eco-warriors who are already 
              making a difference through education, action, and community engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;