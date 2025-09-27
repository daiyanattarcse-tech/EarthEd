export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: number;
  streak: number;
  badges: Badge[];
  completedMissions: string[];
  completedQuizzes: string[];
  gamesPlayed: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: Date;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  steps: MissionStep[];
  points: number;
  badge?: Badge;
  completed: boolean;
}

export interface MissionStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  points: number;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'image-based' | 'scenario';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  points: number;
  image?: string;
}

export interface GameScore {
  gameId: string;
  score: number;
  completedAt: Date;
  timeSpent: number;
}

export interface LeaderboardEntry {
  rank: number;
  user: User;
  totalPoints: number;
  badgeCount: number;
  level: number;
}