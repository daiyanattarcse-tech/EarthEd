import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  CheckCircle, 
  XCircle, 
  Star, 
  Clock, 
  Award,
  ArrowRight,
  RotateCcw,
  Lightbulb
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const Quiz: React.FC = () => {
  const { quizQuestions, completeQuiz } = useGame();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string | number}>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  React.useEffect(() => {
    if (quizStarted && !showResults && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleQuizComplete();
    }
  }, [timeLeft, quizStarted, showResults]);

  const handleAnswerSelect = (answer: string | number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    setShowResults(true);
    const score = calculateScore();
    completeQuiz('eco-quiz-1', score);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((question, index) => {
      const userAnswer = selectedAnswers[index];
      if (userAnswer === question.correctAnswer || 
          (typeof userAnswer === 'string' && typeof question.correctAnswer === 'string' && 
           userAnswer.toLowerCase() === question.correctAnswer.toLowerCase())) {
        correct++;
      }
    });
    return Math.round((correct / quizQuestions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizStarted(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Environmental Knowledge Quiz
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Test your understanding of environmental science, conservation, and sustainability 
                with our comprehensive quiz featuring 5 challenging questions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800 mb-2">Time Limit</h3>
                  <p className="text-blue-600">5 minutes to complete</p>
                </div>
                <div className="p-6 bg-green-50 rounded-xl">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800 mb-2">Points Available</h3>
                  <p className="text-green-600">Up to 100 points</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-800 mb-2">Perfect Score</h3>
                  <p className="text-purple-600">Earn Quiz Master badge</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quiz Topics Include:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Climate Change',
                    'Renewable Energy',
                    'Conservation',
                    'Recycling',
                    'Sustainability',
                    'Environmental Science'
                  ].map((topic) => (
                    <div key={topic} className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setQuizStarted(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Brain className="w-5 h-5" />
                <span>Start Quiz</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = quizQuestions.filter((question, index) => {
      const userAnswer = selectedAnswers[index];
      return userAnswer === question.correctAnswer || 
             (typeof userAnswer === 'string' && typeof question.correctAnswer === 'string' && 
              userAnswer.toLowerCase() === question.correctAnswer.toLowerCase());
    }).length;

    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  score >= 80 ? 'bg-green-100' : score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  {score >= 80 ? (
                    <Award className="w-12 h-12 text-green-600" />
                  ) : score >= 60 ? (
                    <Star className="w-12 h-12 text-yellow-600" />
                  ) : (
                    <Brain className="w-12 h-12 text-red-600" />
                  )}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
                <div className="text-6xl font-bold mb-4">
                  <span className={
                    score >= 80 ? 'text-green-600' : 
                    score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }>
                    {score}%
                  </span>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  You answered {correctAnswers} out of {quizQuestions.length} questions correctly
                </p>

                {score === 100 && (
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-purple-700">
                      <Award className="w-6 h-6" />
                      <span className="font-bold">Perfect Score! You earned the Quiz Master badge! 🧠</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Question Review */}
              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Question Review</h3>
                {quizQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer || 
                                  (typeof userAnswer === 'string' && typeof question.correctAnswer === 'string' && 
                                   userAnswer.toLowerCase() === question.correctAnswer.toLowerCase());

                  return (
                    <div key={question.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCorrect ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Question {index + 1}: {question.question}
                          </h4>
                          
                          {question.image && (
                            <div className="text-4xl mb-3">{question.image}</div>
                          )}
                          
                          {question.options && (
                            <div className="space-y-2 mb-3">
                              {question.options.map((option, optionIndex) => (
                                <div
                                  key={optionIndex}
                                  className={`p-2 rounded-lg text-sm ${
                                    optionIndex === question.correctAnswer
                                      ? 'bg-green-100 text-green-800 font-medium'
                                      : userAnswer === optionIndex && !isCorrect
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-gray-50 text-gray-700'
                                  }`}
                                >
                                  {option}
                                  {optionIndex === question.correctAnswer && ' ✓'}
                                  {userAnswer === optionIndex && !isCorrect && ' ✗'}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="flex items-start space-x-2">
                              <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-blue-800">{question.explanation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={() => window.location.href = '/leaderboard'}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200"
                >
                  <Award className="w-5 h-5" />
                  <span>View Leaderboard</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Header */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className={`text-sm font-medium ${timeLeft < 60 ? 'text-red-600' : 'text-blue-600'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">{question.points} points</span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {question.question}
            </h2>
            
            {question.image && (
              <div className="text-center mb-6">
                <div className="text-8xl">{question.image}</div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {question.type === 'multiple-choice' && question.options && (
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'true-false' && (
              <div className="grid grid-cols-2 gap-4">
                {['true', 'false'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-6 text-center rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === option
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                    }`}
                  >
                    <div className="text-2xl mb-2">
                      {option === 'true' ? '✅' : '❌'}
                    </div>
                    <div className="font-semibold capitalize">{option}</div>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'fill-blank' && (
              <div>
                <input
                  type="text"
                  placeholder="Type your answer here..."
                  value={selectedAnswers[currentQuestion] || ''}
                  onChange={(e) => handleAnswerSelect(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
                />
              </div>
            )}

            {question.type === 'image-based' && question.options && (
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'scenario' && question.options && (
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;