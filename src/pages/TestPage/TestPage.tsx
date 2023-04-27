import {
  Card,
  CardContent,
  CardHeader,
  Fab,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { shuffleArr } from "../utils/shuffle";

const questions = [
  {
    question: "Types of human capital ____ ",
    variants: [
      {
        text: "Knowledge capital",
        isCorrect: false,
      },
      {
        text: "Social capital",
        isCorrect: false,
      },
      {
        text: "Emotional capital",
        isCorrect: false,
      },
      {
        text: "All of the above",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Which of the following is NOT a characteristic of human capital",
    variants: [
      {
        text: "A person's experience",
        isCorrect: true,
      },
      {
        text: "A person's education level",
        isCorrect: false,
      },
      {
        text: "A person's health",
        isCorrect: false,
      },
      {
        text: "A person's financial wealth",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Why is it important to invest in human capital?",
    variants: [
      {
        text: "To increase your company's ranking",
        isCorrect: true,
      },
      {
        text: "To increase your company's economic performance",
        isCorrect: false,
      },
      {
        text: "To increase your company's revenue",
        isCorrect: false,
      },
      {
        text: "To decrease your company's competitiveness",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      " _____ refers to the ability of human to contribute to the process of value-addition in the economy.",
    variants: [
      {
        text: "Human capital",
        isCorrect: false,
      },
      {
        text: "Human Resource",
        isCorrect: true,
      },
      {
        text: "Human capital formation",
        isCorrect: false,
      },
      {
        text: "None of these",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Both human capital and_____ are related to each other.",
    variants: [
      {
        text: "Human resource",
        isCorrect: false,
      },
      {
        text: "Human being",
        isCorrect: false,
      },
      {
        text: "Human development",
        isCorrect: true,
      },
      {
        text: "All of these",
        isCorrect: false,
      },
    ],
  },
  {
    question: "____ refers to the produced means of production.",
    variants: [
      {
        text: "Physical capital",
        isCorrect: false,
      },
      {
        text: "Both a and c",
        isCorrect: true,
      },
      {
        text: "Human development",
        isCorrect: false,
      },
      {
        text: "Human capital",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Addition to the stock of capital can be done by___",
    variants: [
      {
        text: "Expenditure on Education",
        isCorrect: false,
      },
      {
        text: "Expenditure on Health",
        isCorrect: false,
      },
      {
        text: "Study Programme for adults",
        isCorrect: false,
      },
      {
        text: " All of these",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Problems in Human Capital Formation is",
    variants: [
      {
        text: "Low academic standards",
        isCorrect: false,
      },
      {
        text: " Brain Drain",
        isCorrect: false,
      },
      {
        text: " Rising population",
        isCorrect: false,
      },
      {
        text: "All of these",
        isCorrect: true,
      },
    ],
  },
  {
    question: "___ is a much wider concept than literacy.",
    variants: [
      {
        text: "Education",
        isCorrect: true,
      },
      {
        text: "Health",
        isCorrect: false,
      },
      {
        text: "Income",
        isCorrect: false,
      },
      {
        text: "None of these",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which institution is the primary funding authority for universities?",
    variants: [
      {
        text: " NCERT",
        isCorrect: false,
      },
      {
        text: "AICTE",
        isCorrect: false,
      },
      {
        text: "ICMR",
        isCorrect: true,
      },
      {
        text: "UGC",
        isCorrect: false,
      },
    ],
  },
];

export const TestPage = () => {
  const shufledQuestion = useMemo(() => shuffleArr(questions), []);
  console.log(shufledQuestion);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(300);
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
  console.log(time);

  useEffect(() => {
    const intervale = setInterval(() => {
      if (time === 0) {
        setShowResult(true);
      }
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervale);
  }, [time]);

  return (
    <Card component={Stack} minWidth={400}>
      {!showResult && (
        <CardHeader
          title={
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
              {`Question ${currentQuestion + 1}/${questions.length}`}
              <Typography variant='h4'>{time}</Typography>
            </Stack>
          }
          sx={{ color: "#09198d" }}
        />
      )}

      <CardContent component={Stack} direction='column' spacing={2}>
        {showResult ? (
          <Typography sx={{ color: "#09198d" }}>
            Your score is {score}
          </Typography>
        ) : (
          <>
            <Typography sx={{ color: "#09198d" }}>
              {questions[currentQuestion].question} ?
            </Typography>
            {shufledQuestion[currentQuestion].variants.map(
              ({ isCorrect, text }: any) => {
                return (
                  <Fab
                    key={text}
                    onClick={() => handleNextQuestion(isCorrect)}
                    variant='extended'
                  >
                    {text}
                  </Fab>
                );
              }
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
