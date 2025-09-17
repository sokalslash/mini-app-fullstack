import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import FormPage from "./pages/FormPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
};

export default App;
