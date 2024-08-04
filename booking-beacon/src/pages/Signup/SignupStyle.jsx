import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 8px;
  width: 450px;
`;

export const SignupInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
  margin-bottom: 15px;
  width: 100%;
`;

export const SignupInputLabel = styled.p`
  font-size: 14px;
  color: #777777;
`;

export const RelationInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const SignupInput = styled.input`
  outline: none;
  padding: 8px 8px;
  border: 1px solid #d7d7d7;
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid #100538;
  }
`;

export const SignupButton = styled.button`
  width: 450px;
  background-color: #100538;
  color: white;
  font-size: 16px;
  font-weight: 900;
  padding: 8px 0 8px 0;
  border-radius: 12px;
  margin: 0;
  margin-top: 30px;
  border: none;
`;

export const CertiButton = styled.button`
  width: 60px;
  background-color: #100538;
  color: white;
  font-weight: 700;
  padding: 8px 0 8px 0;
  border-radius: 8px;
  margin: 0;
  border: none;
  height: 37px;
  margin-bottom: 15px;
`;
