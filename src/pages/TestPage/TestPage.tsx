import {
  Card,
  CardContent,
  CardHeader,
  Fab,
  Stack,
  Typography,
} from "@mui/material";

const questions = [
  {
    question: "What is your Name",
    variants: [
      {
        text: "Abdulloh",
        isCorrect: true,
      },
      {
        text: "Abdulloh",
        isCorrect: false,
      },
      {
        text: "Abdulloh",
        isCorrect: false,
      },
      {
        text: "Abdulloh",
        isCorrect: false,
      },
    ],
  },
];

export const TestPage = () => {
  return (
    <Card component={Stack} minWidth={400}>
      <CardHeader title='Question 1/4' />

      <CardContent component={Stack} direction='column' spacing={2}>
        {questions[0].variants.map(({ isCorrect, text }) => {
          return <Fab variant='extended'>{text}</Fab>;
        })}
      </CardContent>
    </Card>
  );
};
