import { Box, styled } from "@mui/material";
import { LoginPage, TestPage } from "./pages";
import { Route, Routes } from "react-router-dom";

const HomeContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  return (
    <HomeContainer>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/tests' element={<TestPage />} />
      </Routes>
    </HomeContainer>
  );
}

export default App;
