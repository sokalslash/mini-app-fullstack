import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Добро пожаловать!</h1>
      <p>Это простое приложение для отправки сообщений.</p>
      <Button type="primary" onClick={() => navigate("/form")}>
        Далее
      </Button>
    </div>
  );
};

export default WelcomePage;
