import styled from "styled-components";

export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 100px;
`;

export const SigninFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 600px;
  height: 400px;
`;

export const SigninInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SigninInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #a9a9a9;
  border-radius: 0;
  padding: 6px 15px;
`;

export const SigninInput = styled.input`
  width: 100%;
  border: none;
  outline: none;

  &:focus {
    outline: none;
    border: none;
  }

  &:focus ~ .signin-input-wrapper {
    border: 1px solid #000000;
  }
`;

export const SigninButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 900;
  background-color: #03062b;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const SigninTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px 0 16px 0;
`;

export const TypeTab = styled.div`
  padding: 6px 14px;
  font-weight: 800;
  cursor: pointer;
`;
