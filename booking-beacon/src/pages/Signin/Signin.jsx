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

function Signin() {
  const [userType, setUserType] = useState("A");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

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
    console.log(userType, userId, password);
  };

  return (
    <SigninContainer>
      <div className="DD">로그인 화면입니다</div>
      <SigninTypeContainer>
        <TypeTab
          className={userType == "A" ? "selected-type" : "non-selected-type"}
          onClick={setUser}
        >
          기본회원
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
