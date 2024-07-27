import { useState } from "react";
import { SigninTypeContainer, TypeTab } from "../Signin/SigninStyle";
import "./Signup.css";
import {
  SignupInputWrapper,
  SignupInputLabel,
  RelationInputWrapper,
  SignupInput,
  SignupButton,
} from "./SignupStyle";

function Signup() {
  const [userType, setUserType] = useState("A");

  const setUser = () => {
    setUserType("A");
  };

  const setPartner = () => {
    setUserType("B");
  };

  return (
    <div className="signup-container">
      <div className="DD">회원가입 화면입니다</div>
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
      <div className="signup-form-container">
        <div className="form-container">
          <SignupInputWrapper>
            <SignupInputLabel>아이디</SignupInputLabel>
            <RelationInputWrapper>
              <SignupInput placeholder=""></SignupInput>
              <p>@</p>
              <SignupInput placeholder=""></SignupInput>
            </RelationInputWrapper>
            <button>인증</button>
          </SignupInputWrapper>
          <SignupInputWrapper>
            <SignupInputLabel>비밀번호</SignupInputLabel>
            <div>
              <SignupInput
                placeholder=""
                type="password"
                className="full-width-input"
              ></SignupInput>
            </div>
            <p className={"password-check"}>
              대소문자, 특수문자(!@#$%^&*), 숫자 두개 이상 조합의 8~14자
            </p>
          </SignupInputWrapper>
          <SignupInputWrapper>
            <SignupInputLabel>비밀번호 확인</SignupInputLabel>
            <div>
              <SignupInput
                placeholder=""
                type="password"
                className="full-width-input"
              ></SignupInput>
            </div>
          </SignupInputWrapper>
          <SignupInputWrapper>
            <SignupInputLabel>이름</SignupInputLabel>
            <div>
              <SignupInput
                placeholder=""
                className="full-width-input"
              ></SignupInput>
            </div>
          </SignupInputWrapper>
          <SignupInputWrapper
            className={userType == "B" ? "show-form" : "hide-form"}
          >
            <SignupInputLabel>법인명</SignupInputLabel>
            <div>
              <SignupInput
                placeholder=""
                className="full-width-input"
              ></SignupInput>
            </div>
          </SignupInputWrapper>
          <SignupInputWrapper
            className={userType == "B" ? "show-form" : "hide-form"}
          >
            <SignupInputLabel>사업자등록번호</SignupInputLabel>
            <div>
              <SignupInput
                placeholder=""
                className="full-width-input"
              ></SignupInput>
            </div>
          </SignupInputWrapper>
          <SignupInputWrapper>
            <SignupInputLabel>전화번호</SignupInputLabel>
            <RelationInputWrapper>
              <select>
                <option key="010" value="010">
                  010
                </option>
                <option key="011" value="011">
                  011
                </option>
                <option key="016" value="016">
                  016
                </option>
                <option key="017" value="017">
                  017
                </option>
              </select>
              <p>-</p>
              <SignupInput></SignupInput>
              <p>-</p>
              <SignupInput></SignupInput>
            </RelationInputWrapper>
          </SignupInputWrapper>

          <SignupButton>가입하기</SignupButton>
        </div>
      </div>
    </div>
  );
}

export default Signup;
