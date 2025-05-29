// pages/index.tsx
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  {
    question: "1. TCP/IP modelda nechta layer bor?",
    options: ["3", "4", "5", "7"],
    answer: "4",
  },
  {
    question: "2. TCP/IP modelining Application layeri OSI modelining qaysi qatlamlariga mos keladi?",
    options: [
      "Physical, Data Link",
      "Session, Presentation, Application",
      "Network, Transport",
      "Transport, Application",
    ],
    answer: "Session, Presentation, Application",
  },
  {
    question: "3. Internet Layer vazifasi nima?",
    options: [
      "MAC addresslarni boshqarish",
      "Port raqamlarini belgilash",
      "Tarmoqlar orasidagi ma'lumot uzatishni boshqarish",
      "HTTPS protokolini ishga tushirish",
    ],
    answer: "Tarmoqlar orasidagi ma'lumot uzatishni boshqarish",
  },
  {
    question: "4. Link Layerda ishlatiladigan muhim protokollardan biri nima?",
    options: ["ICMP", "ARP", "HTTP", "SMTP"],
    answer: "ARP",
  },
  {
    question: "5. Transport Layer asosiy protokollari qaysilar?",
    options: ["TCP va UDP", "IP va ICMP", "HTTP va FTP", "MAC va ARP"],
    answer: "TCP va UDP",
  },
];

export const  TCPGame=() =>{
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[step].answer) {
      setScore(score + 1);
    }
    const nextStep = step + 1;
    if (nextStep < questions.length) {
      setStep(nextStep);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <Card className="max-w-xl w-full">
        <CardContent className="p-6 space-y-4">
          {showResult ? (
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">Natija:</h2>
              <p className="text-lg">{score} / {questions.length} to‘g‘ri javob</p>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4">
                {questions[step].question}
              </h2>
              <div className="grid gap-2">
                {questions[step].options.map((opt) => (
                  <Button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    variant="outline"
                  >
                    {opt}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}