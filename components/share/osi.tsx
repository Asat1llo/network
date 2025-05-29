// pages/osi-model-game.tsx

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    question: 'OSI modelda nechta layer bor?',
    options: ['4', '5', '6', '7'],
    answer: '7',
  },
  {
    question: 'Presentation layerning vazifasi nima?',
    options: [
      "Ma'lumotni yuborish",
      "Ma'lumotni tahlil qilish va formatlash",
      'IP manzilni aniqlash',
      'Paketlarni marshrutlash'
    ],
    answer: "Ma'lumotni tahlil qilish va formatlash",
  },
  {
    question: 'OSI modelda “segment” qaysi layerda ishlatiladi?',
    options: ['Network', 'Transport', 'Session', 'Link'],
    answer: 'Transport',
  },
  {
    question: "OSI modelda Physical layer nima bilan shug'ullanadi?",
    options: ['Portlar bilan', 'Protokollar bilan', 'Fizik signal va kabellar bilan', 'IP manzillar bilan'],
    answer: 'Fizik signal va kabellar bilan',
  },
  {
    question: 'OSI modeldagi “frame” PDUsi qaysi layerga tegishli?',
    options: ['Application', 'Data Link', 'Transport', 'Session'],
    answer: 'Data Link',
  }
];

export const OsiModelGame=()=> {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">OSI Model Quiz 🧠</h1>
      <Progress value={(current / questions.length) * 100} className="mb-4" />
      {!completed ? (
        <Card>
          <CardContent className="space-y-4 p-6">
            <p className="text-lg font-medium">{questions[current].question}</p>
            <div className="grid gap-2">
              {questions[current].options.map((option) => (
                <Button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left"
                  variant="outline"
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Tugadi! ✅</h2>
          <p className="text-lg">Siz {score} / {questions.length} ta savolga to‘g‘ri javob berdingiz.</p>
        </div>
      )}
    </div>
  );
}
