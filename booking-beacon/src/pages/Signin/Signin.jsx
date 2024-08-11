import { useState } from "react";
import {
  SigninContainer,
  SigninFormContainer,
  SigninInputContainer,
  SigninInput,
  SigninInputWrapper,
  SigninButton,
  SigninTypeContainer,
  TypeTab,
} from "./SigninStyle";
import "./Signin.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../utils/apiUtil";

function Signin({ setIsLogin, setUserName }) {
  const [userType, setUserType] = useState("A");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const setUser = () => {
    setUserType("A");
  };

  const setPartner = () => {
    setUserType("B");
  };

  const handleUserIdInput = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const onclickSigninButton = () => {
    axiosAuth
      .post(`${baseUrl}/auth/login`, {
        userEmail: userId,
        password: password,
        userType: userType === "A" ? "USER" : "PARTNER",
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);

        const reqUrl = userType === "A" ? "user" : "partner";
        axiosAuth
          .get(`${baseUrl}/auth/${reqUrl}`)
          .then((res) => {
            setUserName(res.data.userName);
            console.log("RESPONSE : " + res);
            alert("로그인 성공");
            setIsLogin(true);
            navigate("/");
          })
          .catch((err) => {
            alert("ERROR : " + err);
          });
      })
      .catch((err) => {
        console.log("ERROR : " + err);
      });
  };

  return (
    <SigninContainer>
      <SigninTypeContainer>
        <TypeTab
          className={userType == "A" ? "selected-type" : "non-selected-type"}
          onClick={setUser}
        >
          개인회원
        </TypeTab>
        <TypeTab
          className={userType == "B" ? "selected-type" : "non-selected-type"}
          onClick={setPartner}
        >
          파트너회원
        </TypeTab>
      </SigninTypeContainer>
      <SigninFormContainer>
        <SigninInputContainer>
          <SigninInputWrapper className="signin-input-wrapper">
            <SigninInput
              value={userId}
              onChange={handleUserIdInput}
              placeholder="아이디"
            ></SigninInput>
          </SigninInputWrapper>
          <SigninInputWrapper className="signin-input-wrapper">
            <SigninInput
              value={password}
              onChange={handlePasswordInput}
              placeholder="비밀번호"
              type="password"
            ></SigninInput>
          </SigninInputWrapper>
        </SigninInputContainer>
        <SigninButton onClick={onclickSigninButton}>로그인</SigninButton>
      </SigninFormContainer>
      <Link to={"/signup"}>회원가입</Link>
    </SigninContainer>
  );
}

export default Signin;
