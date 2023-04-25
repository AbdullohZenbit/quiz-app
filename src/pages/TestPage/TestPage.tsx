import {
  Card,
  CardContent,
  CardHeader,
  Fab,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const questions = [
  {
    question: "What is your Name 1",
    variants: [
      {
        text: "Abdulloh",
        isCorrect: true,
      },
      {
        text: "Azam",
        isCorrect: false,
      },
      {
        text: "Asror",
        isCorrect: false,
      },
      {
        text: "Sardor",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is your Name 2",
    variants: [
      {
        text: "Abdulloh",
        isCorrect: true,
      },
      {
        text: "Azam",
        isCorrect: false,
      },
      {
        text: "Asror",
        isCorrect: false,
      },
      {
        text: "Sardor",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is your Name 3",
    variants: [
      {
        text: "Abdulloh",
        isCorrect: true,
      },
      {
        text: "Azam",
        isCorrect: false,
      },
      {
        text: "Asror",
        isCorrect: false,
      },
      {
        text: "Sardor",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is your Name 4",
    variants: [
      {
        text: "Abdulloh",
        isCorrect: true,
      },
      {
        text: "Azam",
        isCorrect: false,
      },
      {
        text: "Asror",
        isCorrect: false,
      },
      {
        text: "Sardor",
        isCorrect: false,
      },
    ],
  },
];

export const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Card component={Stack} minWidth={400}>
      {!showResult && (
        <CardHeader
          title={`Question   ${currentQuestion + 1}/${questions.length}`}
        />
      )}

      <CardContent component={Stack} direction='column' spacing={2}>
        {showResult ? (
          <Typography>Your score is {score}</Typography>
        ) : (
          <>
            <Typography>{questions[currentQuestion].question} ?</Typography>
            {questions[currentQuestion].variants.map(({ isCorrect, text }) => {
              return (
                <Fab
                  onClick={() => handleNextQuestion(isCorrect)}
                  variant='extended'
                >
                  {text}
                </Fab>
              );
            })}
          </>
        )}
      </CardContent>
    </Card>
  );
};
