import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 28.6341px;
  gap: 30px;

  width: 404.7px;
  height: 525.1px;

  background: rgba(26, 13, 171, 0.35);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 1.90894px 9.54471px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media screen and (max-width: 1280px) {
    width: 380px;
  }
`;

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7.64px;
  width: 353.15px;

  @media screen and (max-width: 1280px) {
    width: auto;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 353.15px;

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

export const Counter = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #fefcfd;
`;

export const ProgressBar = styled.div`
  height: 3px;
  background: #fefcfd;
`;

export const Input = styled.input`
  display: flex;
  align-items: flex-start;
  padding: 4.77236px 14.3171px;
  gap: 8.59px;

  width: 353.15px;
  height: ${(props) => props.height};

  background: #ffffff;
  border-radius: 7.63577px;
  border: none;
  transition: box-shadow 0.3s ease-in-out;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 0px #7e3af2, 0px 0px 0px 2px #7e3af2;
  }
  @media screen and (max-width: 1280px) {
    width: 320px;
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  align-items: flex-start;
  padding: 4.77236px 14.3171px;
  gap: 8.59px;

  width: 353.15px;
  height: ${(props) => props.height};

  background: #ffffff;
  border-radius: 7.63577px;
  border: none;
  transition: box-shadow 0.3s ease-in-out;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 0px #7e3af2, 0px 0px 0px 2px #7e3af2;
  }

  @media screen and (max-width: 1280px) {
    width: 320px;
  }
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
