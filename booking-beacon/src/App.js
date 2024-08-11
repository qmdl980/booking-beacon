import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import Main from "./pages/Main/Main";
import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          userName={userName}
          setUserName={setUserName}
        />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/login"
            element={
              <Signin setIsLogin={setIsLogin} setUserName={setUserName} />
            }
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
