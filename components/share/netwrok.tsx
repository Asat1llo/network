// Next.js interactive game based on Network Protocols Summary

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const questions = [
  {
    question: 'Nima uchun Link Layer kerak?',
    options: [
      'IP manzillarni boshqarish uchun',
      'To\'qnashuvlarni kamaytirish uchun',
      'TCP segmentlarini yuborish uchun',
      'Portlarni boshqarish uchun'
    ],
    answer: 1
  },
  {
    question: 'MAC address nechta bitdan iborat?',
    options: ['32', '64', '48', '128'],
    answer: 2
  },
  {
    question: 'ARP nima qiladi?',
    options: [
      'Port raqamlarini boshqaradi',
      'MAC manzilni IP orqali topadi',
      'DNS so\'rovlarini yuboradi',
      'HTTP trafikni yo\'naltiradi'
    ],
    answer: 1
  },
  {
    question: 'IP address nima uchun kerak?',
    options: [
      'Lokal aloqa uchun',
      'Tarmoq ichida manzil belgilash uchun',
      'Tarmoqlararo uzatish uchun',
      'To\'qnashuvlarni oldini olish uchun'
    ],
    answer: 2
  },
  {
    question: 'TCP qanday protokol?',
    options: [
      'Ishonchsiz va tez',
      'Broadcast asosida',
      'Ishonchli va ketma-ket uzatadi',
      'Faqat lokal tarmoq uchun'
    ],
    answer: 2
  }
];

export const NetworkGame=()=> {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number) => {
    if (index === questions[step].answer) setScore(score + 1);
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return (
      <Card className="max-w-md mx-auto mt-10 text-center">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Natijangiz</h1>
          <p className="text-xl">{score} / {questions.length} to‘g‘ri javob</p>
        </CardContent>
      </Card>
    );
  }

  const q = questions[step];

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">{q.question}</h2>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <Button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full"
            >
              {opt}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

