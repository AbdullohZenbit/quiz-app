import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    localStorage.setItem("user", data.firstName);
    navigate("/tests");
  };
  return (
    <Card
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: 400, height: 300 }}
    >
      <CardContent
        component={Stack}
        height='100%'
        spacing={1}
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography variant='h5'>Login</Typography>
        <TextField
          {...register("firstName", { minLength: 4 })}
          fullWidth
          label='firstName'
        />
        <TextField
          {...register("lastName", { minLength: 4 })}
          fullWidth
          label='lastName'
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};
