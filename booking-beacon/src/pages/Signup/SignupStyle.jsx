import styled from "styled-components";

export const SignupInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
  margin-bottom: 20px;
  width: 100%;
`;

export const SignupInputLabel = styled.p`
  font-size: 12px;
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
  border: none;
`;
