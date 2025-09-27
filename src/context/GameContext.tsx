import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Badge, Mission, MissionStep, QuizQuestion, GameScore } from '../types';

interface GameContextType {
  user: User;
  updateUser: (updates: Partial<User>) => void;
  addPoints: (points: number) => void;
  earnBadge: (badge: Badge) => void;
  completeMission: (missionId: string) => void;
  completeMissionStep: (missionId: string, stepId: string) => void;
  completeQuiz: (quizId: string, score: number) => void;
  addGameScore: (gameScore: GameScore) => void;
  missions: Mission[];
  quizQuestions: QuizQuestion[];
  availableBadges: Badge[];
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const initialUser: User = {
  id: '1',
  name: 'Eco Explorer',
  email: 'explorer@ecoquest.com',
  points: 0,
  level: 1,
  streak: 0,
  badges: [],
  completedMissions: [],
  completedQuizzes: [],
  gamesPlayed: 0,
};

const availableBadges: Badge[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first mission',
    icon: '🌱',
    earned: false,
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Score 100% on any quiz',
    icon: '🧠',
    earned: false,
  },
  {
    id: 'game-champion',
    name: 'Game Champion',
    description: 'Play all three games',
    icon: '🏆',
    earned: false,
  },
  {
    id: 'tree-planter',
    name: 'Tree Planter',
    description: 'Complete the Plant a Tree mission',
    icon: '🌳',
    earned: false,
  },
  {
    id: 'waste-warrior',
    name: 'Waste Warrior',
    description: 'Master waste sorting',
    icon: '♻️',
    earned: false,
  },
  {
    id: 'eco-expert',
    name: 'Eco Expert',
    description: 'Reach 1000 points',
    icon: '🌍',
    earned: false,
  },
];

const missions: Mission[] = [
  {
    id: 'plant-tree',
    title: 'Plant a Tree 🌳',
    description: 'Learn the complete process of planting and nurturing a tree from seedling to maturity.',
    points: 200,
    completed: false,
    steps: [
      {
        id: 'dig-hole',
        title: 'Dig the Hole',
        description: 'Dig a hole twice as wide as the root ball and just as deep.',
        completed: false,
        points: 50,
      },
      {
        id: 'plant-seedling',
        title: 'Plant the Seedling',
        description: 'Carefully place the seedling in the hole and backfill with soil.',
        completed: false,
        points: 50,
      },
      {
        id: 'water-tree',
        title: 'Water the Tree',
        description: 'Give your newly planted tree a thorough watering.',
        completed: false,
        points: 50,
      },
      {
        id: 'watch-grow',
        title: 'Watch It Grow',
        description: 'Monitor your tree\'s growth and provide ongoing care.',
        completed: false,
        points: 50,
      },
    ],
  },
  {
    id: 'waste-sorting',
    title: 'Waste Sorting Challenge 🗑️',
    description: 'Master the art of proper waste disposal by sorting items into the correct recycling bins.',
    points: 150,
    completed: false,
    steps: [
      {
        id: 'learn-categories',
        title: 'Learn Waste Categories',
        description: 'Understand the different types of waste: plastic, compost, paper, and hazardous.',
        completed: false,
        points: 30,
      },
      {
        id: 'sort-items',
        title: 'Sort Items Correctly',
        description: 'Drag and drop 10 items into their correct bins.',
        completed: false,
        points: 70,
      },
      {
        id: 'perfect-score',
        title: 'Achieve Perfect Score',
        description: 'Sort all items correctly without any mistakes.',
        completed: false,
        points: 50,
      },
    ],
  },
];

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    question: 'What percentage of the Earth\'s surface is covered by water?',
    options: ['50%', '60%', '71%', '80%'],
    correctAnswer: 2,
    explanation: 'Approximately 71% of Earth\'s surface is covered by water, with oceans holding about 96.5% of all Earth\'s water.',
    points: 20,
  },
  {
    id: 'q2',
    type: 'true-false',
    question: 'Recycling one aluminum can saves enough energy to power a TV for 3 hours.',
    correctAnswer: 'true',
    explanation: 'True! Recycling aluminum cans is incredibly energy-efficient, saving up to 95% of the energy needed to make new cans.',
    points: 15,
  },
  {
    id: 'q3',
    type: 'fill-blank',
    question: 'The three R\'s of environmental conservation are Reduce, Reuse, and _______.',
    correctAnswer: 'recycle',
    explanation: 'The three R\'s - Reduce, Reuse, and Recycle - form the foundation of waste management and environmental conservation.',
    points: 15,
  },
  {
    id: 'q4',
    type: 'image-based',
    question: 'Which renewable energy source is shown in this image?',
    image: '🌞',
    options: ['Wind', 'Solar', 'Hydro', 'Geothermal'],
    correctAnswer: 1,
    explanation: 'Solar energy harnesses the power of the sun to generate clean, renewable electricity.',
    points: 20,
  },
  {
    id: 'q5',
    type: 'scenario',
    question: 'You notice a leaky faucet in your home that drips once every second. What should you do first?',
    options: [
      'Ignore it, it\'s just a small drip',
      'Fix it immediately to save water',
      'Put a bucket under it to collect water',
      'Wait until it gets worse'
    ],
    correctAnswer: 1,
    explanation: 'A leaky faucet can waste over 3,000 gallons per year! Fixing it immediately saves water and money.',
    points: 25,
  },
];

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);

  useEffect(() => {
    const savedUser = localStorage.getItem('ecoquest-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ecoquest-user', JSON.stringify(user));
  }, [user]);

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addPoints = (points: number) => {
    setUser(prev => {
      const newPoints = prev.points + points;
      const newLevel = Math.floor(newPoints / 100) + 1;
      return { ...prev, points: newPoints, level: newLevel };
    });
  };

  const earnBadge = (badge: Badge) => {
    setUser(prev => {
      if (prev.badges.some(b => b.id === badge.id)) return prev;
      const earnedBadge = { ...badge, earned: true, earnedDate: new Date() };
      return { ...prev, badges: [...prev.badges, earnedBadge] };
    });
  };

  const completeMission = (missionId: string) => {
    setUser(prev => {
      if (prev.completedMissions.includes(missionId)) return prev;
      const mission = missions.find(m => m.id === missionId);
      if (mission) {
        addPoints(mission.points);
        if (missionId === 'plant-tree') {
          earnBadge(availableBadges.find(b => b.id === 'tree-planter')!);
        } else if (missionId === 'waste-sorting') {
          earnBadge(availableBadges.find(b => b.id === 'waste-warrior')!);
        }
      }
      return { ...prev, completedMissions: [...prev.completedMissions, missionId] };
    });
  };

  const completeMissionStep = (missionId: string, stepId: string) => {
    const mission = missions.find(m => m.id === missionId);
    if (mission) {
      const step = mission.steps.find(s => s.id === stepId);
      if (step && !step.completed) {
        step.completed = true;
        addPoints(step.points);
        
        // Check if all steps are completed
        if (mission.steps.every(s => s.completed)) {
          completeMission(missionId);
        }
      }
    }
  };

  const completeQuiz = (quizId: string, score: number) => {
    setUser(prev => {
      if (prev.completedQuizzes.includes(quizId)) return prev;
      addPoints(score);
      if (score === 100) {
        earnBadge(availableBadges.find(b => b.id === 'quiz-master')!);
      }
      return { ...prev, completedQuizzes: [...prev.completedQuizzes, quizId] };
    });
  };

  const addGameScore = (gameScore: GameScore) => {
    setUser(prev => {
      addPoints(gameScore.score);
      const newGamesPlayed = prev.gamesPlayed + 1;
      if (newGamesPlayed >= 3) {
        earnBadge(availableBadges.find(b => b.id === 'game-champion')!);
      }
      return { ...prev, gamesPlayed: newGamesPlayed };
    });
  };

  return (
    <GameContext.Provider value={{
      user,
      updateUser,
      addPoints,
      earnBadge,
      completeMission,
      completeMissionStep,
      completeQuiz,
      addGameScore,
      missions,
      quizQuestions,
      availableBadges,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};