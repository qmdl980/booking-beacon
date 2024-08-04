import { useEffect, useState } from "react";
import { SigninTypeContainer, TypeTab } from "../Signin/SigninStyle";
import "./Signup.css";
import {
  SignupInputWrapper,
  SignupInputLabel,
  RelationInputWrapper,
  SignupInput,
  SignupButton,
  CertiButton,
  EmailInputWrapper,
  SignupContainer,
} from "./SignupStyle";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/config";
import axios from "axios";

function Signup() {
  const [userType, setUserType] = useState("A");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const [chkPwdValid, setChkPwdValid] = useState("");
  const [userName, setUserName] = useState("");
  const [coName, setCoName] = useState("");
  const [coNumber, setCoNumber] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("010");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [phoneNumber3, setPhoneNumber3] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const pwdValid =
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,14}$/;
    if (password.match(pwdValid)) {
      setValidPwd("true");
    } else if (password.length > 0) {
      setValidPwd("false");
    }

    if (password == chkPassword && chkPassword.length > 0) {
      setChkPwdValid("true");
    } else if (chkPassword.length > 0) {
      setChkPwdValid("false");
    }
  }, [password, setPassword]);

  useEffect(() => {
    if (password == chkPassword && chkPassword.length > 0) {
      setChkPwdValid("true");
    } else if (chkPassword.length > 0) {
      setChkPwdValid("false");
    }
  }, [chkPassword, setChkPassword]);

  const setUser = () => {
    setUserType("A");
    setCoName("");
    setCoNumber("");
  };

  const setPartner = () => {
    setUserType("B");
  };

  const handleUserIdInput = (event) => {
    setUserId(event.target.value);
  };
  const handleUserEmailInput = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleChkPasswordInput = (event) => {
    setChkPassword(event.target.value);
  };

  const handleUserNameInput = (event) => {
    setUserName(event.target.value);
  };

  const handleCoNameInput = (event) => {
    setCoName(event.target.value);
  };

  const handleCoNumberInput = (event) => {
    setCoNumber(event.target.value);
  };

  const handlePhoneNumber1Input = (event) => {
    setPhoneNumber1(event.target.value);
  };

  const handlePhoneNumber2Input = (event) => {
    setPhoneNumber2(event.target.value);
  };

  const handlePhoneNumber3Input = (event) => {
    setPhoneNumber3(event.target.value);
  };

  const onclickCertiButton = () => {
    const fullUserId = `${userId}@${userEmail}`;
    console.log(fullUserId);
  };

  const onclickSignupButton = () => {
    let reqUrl = "";
    let reqBody = {};

    if (userType === "A") {
      reqUrl = "join";
      reqBody = {
        userName: userName,
        password: password,
        email: `${userId}@${userEmail}`,
        phoneNumber: `${phoneNumber1}${phoneNumber2}${phoneNumber3}`,
      };
    } else {
      reqUrl = "join-partner";
      reqBody = {
        email: `${userId}@${userEmail}`,
        password: password,
        userName: userName,
        partnerName: coName,
        ein: coNumber,
        phoneNumber: `${phoneNumber1}${phoneNumber2}${phoneNumber3}`,
      };
    }

    axios
      .post(`${baseUrl}/auth/${reqUrl}`, reqBody)
      .then((res) => {
        console.log("RESPONSE : " + res);
        alert("가입에 성공하셨습니다!");
        navigate("/signin");
      })
      .catch((err) => {
        console.log("ERROR : " + err);
      });
  };

  return (
    <SignupContainer>
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
      <div className="signup-form-container">
        <div className="form-container">
          <EmailInputWrapper>
            <SignupInputWrapper>
              <SignupInputLabel>아이디</SignupInputLabel>
              <RelationInputWrapper>
                <SignupInput
                  placeholder=""
                  style={{ width: "141px" }}
                  value={userId}
                  onChange={handleUserIdInput}
                ></SignupInput>
                <p className="at-p">@</p>
                <SignupInput
                  placeholder=""
                  style={{ width: "185px" }}
                  value={userEmail}
                  onChange={handleUserEmailInput}
                ></SignupInput>
              </RelationInputWrapper>
            </SignupInputWrapper>
            <CertiButton onClick={onclickCertiButton}>인증</CertiButton>
          </EmailInputWrapper>
          <SignupInputWrapper>
            <SignupInputLabel>비밀번호</SignupInputLabel>
            <div
              className={
                validPwd === "true"
                  ? "password-valid-input"
                  : validPwd === "false"
                  ? "password-invalid-input"
                  : ""
              }
            >
              <SignupInput
                placeholder=""
                type="password"
                className="full-width-input"
                value={password}
                onChange={handlePasswordInput}
              ></SignupInput>
            </div>
            <p
              className={
                validPwd === "true" ? "password-valid" : "password-invalid"
              }
            >
              대소문자, 특수문자(!@#$%^&*), 숫자 두개 이상 조합의 8~14자
            </p>
          </SignupInputWrapper>
          <SignupInputWrapper>
            <SignupInputLabel>비밀번호 확인</SignupInputLabel>
            <div
              className={
                chkPwdValid === "true"
                  ? "chk-pwd-valid"
                  : chkPwdValid === "false"
                  ? "chk-pwd-invalid"
                  : ""
              }
            >
              <SignupInput
                placeholder=""
                type="password"
                className={"full-width-input"}
                value={chkPassword}
                onChange={handleChkPasswordInput}
              ></SignupInput>
            </div>
          </SignupInputWrapper>
          <SignupInputWrapper>
            <SignupInputLabel>이름</SignupInputLabel>
            <div>
              <SignupInput
                placeholder=""
                className="full-width-input"
                value={userName}
                onChange={handleUserNameInput}
              ></SignupInput>
            </div>
          </SignupInputWrapper>
          <div className={userType == "B" ? "show-form" : "hide-form"}>
            <SignupInputWrapper>
              <SignupInputLabel>법인명</SignupInputLabel>
              <div>
                <SignupInput
                  placeholder=""
                  className="full-width-input"
                  value={coName}
                  onChange={handleCoNameInput}
                ></SignupInput>
              </div>
            </SignupInputWrapper>
          </div>
          <div className={userType == "B" ? "show-form" : "hide-form"}>
            <SignupInputWrapper>
              <SignupInputLabel>사업자등록번호</SignupInputLabel>
              <div>
                <SignupInput
                  placeholder=""
                  className="full-width-input"
                  type="number"
                  value={coNumber}
                  onChange={handleCoNumberInput}
                ></SignupInput>
              </div>
            </SignupInputWrapper>
          </div>
          <SignupInputWrapper>
            <SignupInputLabel>전화번호</SignupInputLabel>
            <RelationInputWrapper>
              <select
                className="phone-number-select"
                onChange={handlePhoneNumber1Input}
              >
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
              <p className="hyp-p">-</p>
              <SignupInput
                type="number"
                style={{ width: "151px" }}
                value={phoneNumber2}
                onChange={handlePhoneNumber2Input}
              ></SignupInput>
              <p className="hyp-p">-</p>
              <SignupInput
                type="number"
                style={{ width: "151px" }}
                value={phoneNumber3}
                onChange={handlePhoneNumber3Input}
              ></SignupInput>
            </RelationInputWrapper>
          </SignupInputWrapper>

          <SignupButton onClick={onclickSignupButton}>가입하기</SignupButton>
        </div>
      </div>
    </SignupContainer>
  );
}

export default Signup;
