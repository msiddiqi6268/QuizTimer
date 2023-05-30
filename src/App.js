import React, { useEffect, useState } from 'react';
import './App.css'
import tupsound from './assets/timeup.wav'
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainingTime, setRemainingTime] = useState(30); // Set initial time in seconds
  const playTimeUpSound = () => {
    const audio = new Audio(tupsound);
    audio.play();
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      playTimeUpSound()
      clearInterval(timer);
      handleNextQuestion()
    }

    return () => clearInterval(timer);
  }, [remainingTime]);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setRemainingTime(30); // Reset the timer for the next question
  };

  const questions = [
    "Tell me about yourself.",
    "Why do you want to work for our company?",
    "What are your greatest strengths and weaknesses?",
    "Why are you looking for a change?",
    "Tell me about the gap in your resume.",
    "How would you rate yourself on a scale of 1 to 10?",
    "What is your biggest achievement so far?",
    "Where do you see yourself in 5 years?",
    "Why should we hire you?",
    "How do you deal with criticism?",
    "What are your hobbies?",
    "Tell me about a time when you were not satisfied with your performance.",
    "Tell me about a time when you were made to work under close supervision.",
    "Can you tell me about a time where you were happy with your work and what was your reaction?",
    "Tell me about a time where you experienced difficulty at work while working on a project.",
    "Tell me about a time where you displayed leadership skills.",
    "Was there any point in your career where you made any mistake? Tell me about it.",
    "How did you handle disagreements with your manager?",
    "Tell me how you will handle it if suddenly the priorities of a project were changed?",
    "Consider the scenario - You win a million-dollar lottery. Would you still be working?",
    "What would you do if you were working under a bad boss?",
    "What do you think is an ideal work environment?",
    "What does motivation mean to you?",
    "What is your dream company like?",
    "What do you do to ensure that a certain number of tasks is completed effectively?",
    "What would you prefer - being liked or being feared?",
    "How long do you think you will be working for us if you are hired?",
    "If you were reborn as an animal, what animal would you want to be?",
    "Will you lie for the company under any circumstances?",
    "What do you think is better - being perfect and delivering late or being good and delivering on time?",
    "How many times in a day does the clock’s hand overlap?",
    "What to expect?",
    "What is your current salary?",
    "What is your salary expectation?",
    "How much do you think you should be paid by looking at your qualifications?",
    "Why do you choose electrical engineering?",
    "How to sell a pencil?",
    "What is the thing that makes you unique?",
    "How do you deal with a difficult co-worker?",
    "If your boss asks something that you disagreed with, what will you do?",
    "What do you do in the starting days of your work?",
    "How do you explain something technical to a non-technical person?",
    "What is your ideal boss like?",
    "Tell me a time when you worked as part of a team.",
    "Describe a time when you experienced conflict with a co-worker.",
    "Describe a situation when you worked under pressure.",
    "Describe yourself in 3 words.",
    "What do you bring to the role?"
  ];

  return (
    <div className='container'>
      <h2 className='heading'>Interview Questions</h2>
      <h1 className='question'>{questions[currentQuestion]}</h1>
      <p className='timer'>Time Remaining: {remainingTime}s</p>
    </div>
  );
};

export default App;
