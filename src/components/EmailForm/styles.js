import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  gap: 30px;
  margin-top: 73px;

  width: 424px;
  height: 424px;

  background: rgba(26, 13, 171, 0.35);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media screen and (max-width: 1280px) {
    width: 380px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  width: 370px;

  @media screen and (max-width: 1280px) {
    width: auto;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: flex-start;
  padding: 5px 15px;
  gap: 9px;
  border: none;

  width: 370px;
  height: ${(props) => (props.height ? props.height : "40px")};

  background: #ffffff;
  border-radius: 8px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 0px #7e3af2, 0px 0px 0px 2px #ffc857;
  }

  &::placeholder {
    display: flex;
    align-items: flex-start;
    text-align: start;
    color: rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 1280px) {
    width: 320px;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #fefcfd;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
`;

export const Button = styled.button`
  width: 97px;
  height: 28px;

  background: white;
  border-radius: 10px;
  border: none;

  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #7e3af2;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: #7e3af2;
    color: white;
  }
`;
