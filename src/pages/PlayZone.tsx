import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Grid3X3, 
  Search, 
  Shuffle, 
  Trophy, 
  Clock, 
  Star,
  CheckCircle,
  RotateCcw,
  Lightbulb
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const PlayZone: React.FC = () => {
  const { addGameScore } = useGame();
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // Crossword Game
  const [crosswordAnswers, setCrosswordAnswers] = useState<{[key: string]: string}>({
    '1-across': '',
    '2-across': '',
    '3-across': '',
    '1-down': '',
    '2-down': '',
  });

  const crosswordClues = {
    across: [
      { number: 1, clue: 'Process of converting waste into reusable material (7)', answer: 'RECYCLE' },
      { number: 2, clue: 'Energy from the sun (5)', answer: 'SOLAR' },
      { number: 3, clue: 'Large area covered with trees (6)', answer: 'FOREST' },
    ],
    down: [
      { number: 1, clue: 'To use again (5)', answer: 'REUSE' },
      { number: 2, clue: 'Gas that plants absorb (6)', answer: 'CARBON' },
    ]
  };

  // Word Search Game
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const wordSearchGrid = [
    ['R', 'E', 'C', 'Y', 'C', 'L', 'E', 'X'],
    ['S', 'O', 'L', 'A', 'R', 'T', 'R', 'E'],
    ['F', 'O', 'R', 'E', 'S', 'T', 'E', 'S'],
    ['W', 'I', 'N', 'D', 'P', 'L', 'A', 'N'],
    ['O', 'C', 'E', 'A', 'N', 'G', 'R', 'T'],
    ['G', 'R', 'E', 'E', 'N', 'E', 'E', 'S'],
    ['E', 'A', 'R', 'T', 'H', 'N', 'N', 'U'],
    ['C', 'L', 'I', 'M', 'A', 'T', 'E', 'N'],
  ];

  const wordsToFind = ['RECYCLE', 'SOLAR', 'FOREST', 'WIND', 'OCEAN', 'GREEN', 'EARTH', 'CLIMATE'];

  // Matching Pairs Game
  const [matchingPairs, setMatchingPairs] = useState([
    { id: 1, type: 'animal', content: '🐧', matched: false, flipped: false },
    { id: 2, type: 'habitat', content: 'Arctic', matched: false, flipped: false },
    { id: 3, type: 'animal', content: '🐠', matched: false, flipped: false },
    { id: 4, type: 'habitat', content: 'Ocean', matched: false, flipped: false },
    { id: 5, type: 'animal', content: '🦁', matched: false, flipped: false },
    { id: 6, type: 'habitat', content: 'Savanna', matched: false, flipped: false },
    { id: 7, type: 'animal', content: '🐻', matched: false, flipped: false },
    { id: 8, type: 'habitat', content: 'Forest', matched: false, flipped: false },
  ]);

  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const games = [
    {
      id: 'crossword',
      title: 'Environmental Crossword',
      description: 'Test your eco-vocabulary with this challenging crossword puzzle featuring environmental terms.',
      icon: Grid3X3,
      difficulty: 'Medium',
      points: 100,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'wordsearch',
      title: 'Green Word Search',
      description: 'Find hidden environmental terms in this engaging word search puzzle.',
      icon: Search,
      difficulty: 'Easy',
      points: 75,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'matching',
      title: 'Eco Matching Pairs',
      description: 'Match animals with their natural habitats in this memory-challenging game.',
      icon: Shuffle,
      difficulty: 'Hard',
      points: 125,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const handleCrosswordSubmit = () => {
    let score = 0;
    const answers = crosswordAnswers;
    
    if (answers['1-across'].toLowerCase() === 'recycle') score += 20;
    if (answers['2-across'].toLowerCase() === 'solar') score += 20;
    if (answers['3-across'].toLowerCase() === 'forest') score += 20;
    if (answers['1-down'].toLowerCase() === 'reuse') score += 20;
    if (answers['2-down'].toLowerCase() === 'carbon') score += 20;

    addGameScore({
      gameId: 'crossword',
      score,
      completedAt: new Date(),
      timeSpent: 300 // 5 minutes
    });

    alert(`Crossword completed! You scored ${score} points!`);
    setActiveGame(null);
  };

  const handleWordFound = (word: string) => {
    if (!foundWords.includes(word)) {
      setFoundWords([...foundWords, word]);
      if (foundWords.length + 1 === wordsToFind.length) {
        addGameScore({
          gameId: 'wordsearch',
          score: 75,
          completedAt: new Date(),
          timeSpent: 240
        });
        alert('Word Search completed! You found all words and earned 75 points!');
        setActiveGame(null);
      }
    }
  };

  const handleCardClick = (cardId: number) => {
    if (selectedCards.length === 2) return;
    
    const newPairs = matchingPairs.map(card => 
      card.id === cardId ? { ...card, flipped: true } : card
    );
    setMatchingPairs(newPairs);
    
    const newSelected = [...selectedCards, cardId];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      const firstCard = matchingPairs.find(c => c.id === first);
      const secondCard = matchingPairs.find(c => c.id === second);

      setTimeout(() => {
        if (
          (firstCard?.content === '🐧' && secondCard?.content === 'Arctic') ||
          (firstCard?.content === 'Arctic' && secondCard?.content === '🐧') ||
          (firstCard?.content === '🐠' && secondCard?.content === 'Ocean') ||
          (firstCard?.content === 'Ocean' && secondCard?.content === '🐠') ||
          (firstCard?.content === '🦁' && secondCard?.content === 'Savanna') ||
          (firstCard?.content === 'Savanna' && secondCard?.content === '🦁') ||
          (firstCard?.content === '🐻' && secondCard?.content === 'Forest') ||
          (firstCard?.content === 'Forest' && secondCard?.content === '🐻')
        ) {
          setMatchingPairs(prev => prev.map(card => 
            newSelected.includes(card.id) ? { ...card, matched: true } : card
          ));
          
          if (matchingPairs.filter(c => c.matched).length + 2 === matchingPairs.length) {
            addGameScore({
              gameId: 'matching',
              score: 125,
              completedAt: new Date(),
              timeSpent: 180
            });
            alert('Matching game completed! You earned 125 points!');
            setActiveGame(null);
          }
        } else {
          setMatchingPairs(prev => prev.map(card => 
            newSelected.includes(card.id) ? { ...card, flipped: false } : card
          ));
        }
        setSelectedCards([]);
      }, 1000);
    }
  };

  const resetGame = (gameId: string) => {
    if (gameId === 'crossword') {
      setCrosswordAnswers({
        '1-across': '',
        '2-across': '',
        '3-across': '',
        '1-down': '',
        '2-down': '',
      });
    } else if (gameId === 'wordsearch') {
      setFoundWords([]);
    } else if (gameId === 'matching') {
      setMatchingPairs(prev => prev.map(card => ({ ...card, matched: false, flipped: false })));
      setSelectedCards([]);
    }
  };

  if (activeGame) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setActiveGame(null)}
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to Games
            </button>
            <button
              onClick={() => resetGame(activeGame)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Game
            </button>
          </div>

          {activeGame === 'crossword' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Environmental Crossword</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Clues</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Across</h4>
                      {crosswordClues.across.map((clue) => (
                        <p key={clue.number} className="text-sm text-gray-600 mb-1">
                          {clue.number}. {clue.clue}
                        </p>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Down</h4>
                      {crosswordClues.down.map((clue) => (
                        <p key={clue.number} className="text-sm text-gray-600 mb-1">
                          {clue.number}. {clue.clue}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Answers</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">1 Across</label>
                      <input
                        type="text"
                        value={crosswordAnswers['1-across']}
                        onChange={(e) => setCrosswordAnswers({...crosswordAnswers, '1-across': e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="7 letters"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">2 Across</label>
                      <input
                        type="text"
                        value={crosswordAnswers['2-across']}
                        onChange={(e) => setCrosswordAnswers({...crosswordAnswers, '2-across': e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="5 letters"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">3 Across</label>
                      <input
                        type="text"
                        value={crosswordAnswers['3-across']}
                        onChange={(e) => setCrosswordAnswers({...crosswordAnswers, '3-across': e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="6 letters"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">1 Down</label>
                      <input
                        type="text"
                        value={crosswordAnswers['1-down']}
                        onChange={(e) => setCrosswordAnswers({...crosswordAnswers, '1-down': e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="5 letters"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">2 Down</label>
                      <input
                        type="text"
                        value={crosswordAnswers['2-down']}
                        onChange={(e) => setCrosswordAnswers({...crosswordAnswers, '2-down': e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="6 letters"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCrosswordSubmit}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
                  >
                    Submit Crossword
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeGame === 'wordsearch' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Green Word Search</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="grid grid-cols-8 gap-1 mb-4">
                    {wordSearchGrid.map((row, rowIndex) =>
                      row.map((letter, colIndex) => (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className="w-8 h-8 bg-green-100 border border-green-200 flex items-center justify-center text-sm font-medium text-green-800 cursor-pointer hover:bg-green-200 transition-colors"
                        >
                          {letter}
                        </div>
                      ))
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Words to Find</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {wordsToFind.map((word) => (
                      <div
                        key={word}
                        className={`p-2 rounded-lg text-center font-medium transition-all duration-200 ${
                          foundWords.includes(word)
                            ? 'bg-green-100 text-green-700 line-through'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-800">Hint</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Click on letters to select words. Words can be horizontal, vertical, or diagonal!
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Progress: {foundWords.length}/{wordsToFind.length}</span>
                      <span>{Math.round((foundWords.length / wordsToFind.length) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(foundWords.length / wordsToFind.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleWordFound('RECYCLE')}
                    className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
                  >
                    Find a Word (Demo)
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeGame === 'matching' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Eco Matching Pairs</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {matchingPairs.map((card) => (
                    <motion.div
                      key={card.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCardClick(card.id)}
                      className={`aspect-square rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-center p-2 ${
                        card.matched
                          ? 'bg-green-100 border-2 border-green-500'
                          : card.flipped
                          ? 'bg-blue-100 border-2 border-blue-500'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {card.flipped || card.matched ? (
                        <div className="text-center">
                          {card.type === 'animal' ? (
                            <div className="text-2xl mb-1">{card.content}</div>
                          ) : (
                            <div className="text-sm font-medium text-gray-700">{card.content}</div>
                          )}
                        </div>
                      ) : (
                        <div className="text-2xl">🌿</div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600">
                        Matched: {matchingPairs.filter(c => c.matched).length / 2}/4
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Best Time: 2:30</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-purple-800">How to Play</span>
                    </div>
                    <p className="text-sm text-purple-700">
                      Click on cards to flip them and match animals with their natural habitats. 
                      Find all 4 pairs to complete the game!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            Play Zone
            <span className="block text-2xl lg:text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-normal mt-2">
              Learn Through Interactive Games
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive into our collection of engaging environmental games designed to make learning about 
            sustainability fun and memorable. Each game rewards you with points and badges!
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setActiveGame(game.id)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <div className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center relative overflow-hidden`}>
                  <game.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{game.difficulty}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {game.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">{game.points} points</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Play Now</span>
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Game Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Play Environmental Games?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our games are scientifically designed to enhance learning retention and make 
              environmental education engaging and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid3X3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Learning</h3>
              <p className="text-gray-600">
                Interactive gameplay increases knowledge retention by up to 90% compared to traditional learning methods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Motivation & Rewards</h3>
              <p className="text-gray-600">
                Earn points, badges, and climb leaderboards while learning about environmental conservation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-World Impact</h3>
              <p className="text-gray-600">
                Apply learned concepts to make positive environmental changes in your daily life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlayZone;