import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 39px;
  gap: 10px;

  width: 287px;
  height: 91px;

  background: #fcfeff;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  position: fixed;
  right: 0;
  top: 97px;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
`;

export const Text = styled.p`
  width: 209px;
  height: 19px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #7e3af2;
`;
