import { useState } from "react";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <>
      <LoginPage />
      <SignupPage /> 
    </>
  );
}

export default App;
