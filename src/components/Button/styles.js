import styled, { css } from "styled-components";

export const MainButton = styled.button`
  background: #fefcfd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 0px 18px;
  width: 82px;
  height: 39px;

  color: #7e3af2;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: none;

  ${(props) =>
    props.secondary &&
    css`
      background: #7e3af2;
      color: white;
      width: ${(props) => props.width};
      height: ${(props) => props.height};
    `}

  ${(props) =>
    props.custom &&
    css`
      background: ${(props) => props.background};
      color: ${(props) => props.color};
      width: ${(props) => props.width};
      height: ${(props) => props.height};
    `}
`;
