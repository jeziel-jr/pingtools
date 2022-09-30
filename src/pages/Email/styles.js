import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 57px 153px 0px 48px;
  gap: 10px;

  width: 100vw;
  height: 767px;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    width: 400px;
    padding: 57px 0px 0px 0px;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 153px;

  width: 1079px;
  height: 710px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    height: 1355px;
    align-items: center;
    gap: 57px;
    width: 400px;
  }
`;

export const ButtonAndPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 34px;

  width: 502px;
  height: 710px;

  @media screen and (max-width: 1280px) {
    width: 400px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 460px;

  @media screen and (max-width: 1280px) {
    width: 400px;
  }

  a {
    padding: 0px 18px;
    height: 39px;
    background: #fefcfd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #7e3af2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    transition: 0.3s, scale 0.3s;

    &.active {
      background: #7e3af2;
      color: white;
    }

    &:hover {
      scale: 1.05;
    }
  }
`;
