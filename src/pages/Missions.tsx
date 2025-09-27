import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  Trash2, 
  CheckCircle, 
  Circle, 
  Star, 
  Clock,
  Award,
  ArrowRight,
  Shovel,
  Droplets,
  Sprout,
  Eye
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const Missions: React.FC = () => {
  const { missions, completeMissionStep, user } = useGame();
  const [activeMission, setActiveMission] = useState<string | null>(null);
  const [plantTreeStep, setPlantTreeStep] = useState(0);
  const [wasteSortingScore, setWasteSortingScore] = useState(0);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const wasteItems = [
    { id: 'plastic-bottle', name: 'Plastic Bottle', type: 'plastic', emoji: '🍼' },
    { id: 'banana-peel', name: 'Banana Peel', type: 'compost', emoji: '🍌' },
    { id: 'newspaper', name: 'Newspaper', type: 'paper', emoji: '📰' },
    { id: 'battery', name: 'Battery', type: 'hazardous', emoji: '🔋' },
    { id: 'apple-core', name: 'Apple Core', type: 'compost', emoji: '🍎' },
    { id: 'cardboard', name: 'Cardboard Box', type: 'paper', emoji: '📦' },
    { id: 'plastic-bag', name: 'Plastic Bag', type: 'plastic', emoji: '🛍️' },
    { id: 'paint-can', name: 'Paint Can', type: 'hazardous', emoji: '🎨' },
  ];

  const bins = [
    { type: 'plastic', name: 'Plastic Recycling', color: 'bg-blue-100 border-blue-300', emoji: '♻️' },
    { type: 'compost', name: 'Compost Bin', color: 'bg-green-100 border-green-300', emoji: '🌱' },
    { type: 'paper', name: 'Paper Recycling', color: 'bg-yellow-100 border-yellow-300', emoji: '📄' },
    { type: 'hazardous', name: 'Hazardous Waste', color: 'bg-red-100 border-red-300', emoji: '⚠️' },
  ];

  const handlePlantTreeStep = (stepId: string) => {
    completeMissionStep('plant-tree', stepId);
    setPlantTreeStep(prev => prev + 1);
  };

  const handleDragStart = (itemId: string) => {
    setDraggedItem(itemId);
  };

  const handleDrop = (binType: string) => {
    if (!draggedItem) return;
    
    const item = wasteItems.find(i => i.id === draggedItem);
    if (item && item.type === binType) {
      setWasteSortingScore(prev => prev + 10);
      // Remove item from available items (in a real app)
    }
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  if (activeMission === 'plant-tree') {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setActiveMission(null)}
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to Missions
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
              <div className="flex items-center space-x-4">
                <TreePine className="w-12 h-12" />
                <div>
                  <h1 className="text-3xl font-bold">Plant a Tree Mission 🌳</h1>
                  <p className="text-green-100 mt-2">
                    Learn the complete process of planting and nurturing a tree from seedling to maturity.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Mission Progress</h2>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">200 points total</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(plantTreeStep / 4) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Step {plantTreeStep} of 4 completed</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Step 1: Dig the Hole */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    plantTreeStep >= 1 
                      ? 'bg-green-50 border-green-300' 
                      : 'bg-white border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plantTreeStep >= 1 ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <Shovel className={`w-8 h-8 ${plantTreeStep >= 1 ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Dig the Hole</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Dig a hole twice as wide as the root ball and just as deep.
                    </p>
                    {plantTreeStep >= 1 ? (
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Completed!</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handlePlantTreeStep('dig-hole')}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Start Digging
                      </button>
                    )}
                  </div>
                </motion.div>

                {/* Step 2: Plant Seedling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    plantTreeStep >= 2 
                      ? 'bg-green-50 border-green-300' 
                      : plantTreeStep >= 1
                      ? 'bg-white border-gray-200 hover:border-green-300'
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plantTreeStep >= 2 ? 'bg-green-100' : plantTreeStep >= 1 ? 'bg-gray-100' : 'bg-gray-50'
                    }`}>
                      <Sprout className={`w-8 h-8 ${
                        plantTreeStep >= 2 ? 'text-green-600' : plantTreeStep >= 1 ? 'text-gray-400' : 'text-gray-300'
                      }`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Plant Seedling</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Carefully place the seedling in the hole and backfill with soil.
                    </p>
                    {plantTreeStep >= 2 ? (
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Completed!</span>
                      </div>
                    ) : plantTreeStep >= 1 ? (
                      <button
                        onClick={() => handlePlantTreeStep('plant-seedling')}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Plant Seedling
                      </button>
                    ) : (
                      <div className="text-gray-400 text-sm">Complete previous step</div>
                    )}
                  </div>
                </motion.div>

                {/* Step 3: Water Tree */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    plantTreeStep >= 3 
                      ? 'bg-green-50 border-green-300' 
                      : plantTreeStep >= 2
                      ? 'bg-white border-gray-200 hover:border-green-300'
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plantTreeStep >= 3 ? 'bg-green-100' : plantTreeStep >= 2 ? 'bg-gray-100' : 'bg-gray-50'
                    }`}>
                      <Droplets className={`w-8 h-8 ${
                        plantTreeStep >= 3 ? 'text-green-600' : plantTreeStep >= 2 ? 'text-gray-400' : 'text-gray-300'
                      }`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Water the Tree</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Give your newly planted tree a thorough watering.
                    </p>
                    {plantTreeStep >= 3 ? (
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Completed!</span>
                      </div>
                    ) : plantTreeStep >= 2 ? (
                      <button
                        onClick={() => handlePlantTreeStep('water-tree')}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Water Tree
                      </button>
                    ) : (
                      <div className="text-gray-400 text-sm">Complete previous step</div>
                    )}
                  </div>
                </motion.div>

                {/* Step 4: Watch Grow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    plantTreeStep >= 4 
                      ? 'bg-green-50 border-green-300' 
                      : plantTreeStep >= 3
                      ? 'bg-white border-gray-200 hover:border-green-300'
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plantTreeStep >= 4 ? 'bg-green-100' : plantTreeStep >= 3 ? 'bg-gray-100' : 'bg-gray-50'
                    }`}>
                      <Eye className={`w-8 h-8 ${
                        plantTreeStep >= 4 ? 'text-green-600' : plantTreeStep >= 3 ? 'text-gray-400' : 'text-gray-300'
                      }`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Watch It Grow</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Monitor your tree's growth and provide ongoing care.
                    </p>
                    {plantTreeStep >= 4 ? (
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Completed!</span>
                      </div>
                    ) : plantTreeStep >= 3 ? (
                      <button
                        onClick={() => handlePlantTreeStep('watch-grow')}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Complete Mission
                      </button>
                    ) : (
                      <div className="text-gray-400 text-sm">Complete previous step</div>
                    )}
                  </div>
                </motion.div>
              </div>

              {plantTreeStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200"
                >
                  <div className="text-center">
                    <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Mission Completed! 🎉</h3>
                    <p className="text-green-700 mb-4">
                      Congratulations! You've successfully learned how to plant a tree. 
                      You've earned 200 points and the Tree Planter badge!
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="font-semibold">+200 points</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🌳</span>
                        <span className="font-semibold">Tree Planter Badge</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeMission === 'waste-sorting') {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setActiveMission(null)}
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to Missions
            </button>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">Score: {wasteSortingScore}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-8 text-white">
              <div className="flex items-center space-x-4">
                <Trash2 className="w-12 h-12" />
                <div>
                  <h1 className="text-3xl font-bold">Waste Sorting Challenge 🗑️</h1>
                  <p className="text-blue-100 mt-2">
                    Master the art of proper waste disposal by sorting items into the correct recycling bins.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Items to Sort */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Items to Sort</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {wasteItems.map((item) => (
                      <div
                        key={item.id}
                        draggable
                        onDragStart={() => handleDragStart(item.id)}
                        className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-move transition-all duration-200 hover:shadow-md"
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-2">{item.emoji}</div>
                          <div className="text-sm font-medium text-gray-700">{item.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recycling Bins */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Recycling Bins</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {bins.map((bin) => (
                      <div
                        key={bin.type}
                        onDrop={() => handleDrop(bin.type)}
                        onDragOver={handleDragOver}
                        className={`p-6 rounded-lg border-2 border-dashed transition-all duration-200 hover:scale-105 ${bin.color}`}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-2">{bin.emoji}</div>
                          <div className="text-sm font-medium text-gray-700">{bin.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-bold text-blue-800 mb-4">Sorting Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-blue-700 mb-2">♻️ Plastic</div>
                    <p className="text-blue-600">Bottles, containers, bags</p>
                  </div>
                  <div>
                    <div className="font-medium text-green-700 mb-2">🌱 Compost</div>
                    <p className="text-green-600">Food scraps, organic waste</p>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700 mb-2">📄 Paper</div>
                    <p className="text-yellow-600">Newspapers, cardboard, books</p>
                  </div>
                  <div>
                    <div className="font-medium text-red-700 mb-2">⚠️ Hazardous</div>
                    <p className="text-red-600">Batteries, paint, chemicals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Environmental Missions
            <span className="block text-2xl lg:text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-normal mt-2">
              Real-World Impact Through Action
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take on hands-on environmental challenges that teach practical skills and create positive 
            impact. Complete missions to earn points, badges, and make a real difference for our planet.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${
                mission.id === 'plant-tree' 
                  ? 'from-green-500 to-emerald-600' 
                  : 'from-blue-500 to-cyan-600'
              } flex items-center justify-center relative overflow-hidden`}>
                {mission.id === 'plant-tree' ? (
                  <TreePine className="w-24 h-24 text-white group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Trash2 className="w-24 h-24 text-white group-hover:scale-110 transition-transform duration-300" />
                )}
                
                {user.completedMissions.includes(mission.id) && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{mission.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-700">{mission.points} pts</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {mission.description}
                </p>

                {/* Mission Steps Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Mission Steps:</h4>
                  <div className="space-y-2">
                    {mission.steps.map((step, stepIndex) => (
                      <div key={step.id} className="flex items-center space-x-3">
                        {step.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${step.completed ? 'text-green-700' : 'text-gray-600'}`}>
                          {step.title}
                        </span>
                        <span className="text-xs text-gray-500">({step.points} pts)</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-500">
                      {mission.steps.filter(s => s.completed).length}/{mission.steps.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${(mission.steps.filter(s => s.completed).length / mission.steps.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {user.completedMissions.includes(mission.id) ? (
                  <div className="flex items-center justify-center space-x-2 py-3 px-6 bg-green-100 text-green-700 rounded-lg font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Mission Completed!</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveMission(mission.id)}
                    className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      mission.id === 'plant-tree'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <span>Start Mission</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Complete Environmental Missions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our missions bridge the gap between learning and action, providing practical skills 
              that create real environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">
                Learn by doing with step-by-step guidance through real environmental actions 
                that make a tangible difference.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600">
                Develop practical environmental skills like proper waste sorting, tree planting, 
                and sustainable living practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Impact</h3>
              <p className="text-gray-600">
                Join a global community of eco-warriors making positive changes and inspiring 
                others to take environmental action.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Missions;