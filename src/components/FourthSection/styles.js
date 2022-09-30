import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px 60px;
  gap: 111px;

  width: 1280px;
  height: 560px;

  @media screen and (max-width: 1280px) {
    width: 414px;
    gap: 30px;
    height: 395px;
    padding: 45px 20px;
  }
`;

export const LogoImage = styled.img`
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    width: 190px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 51px 48px;
  gap: 10px;

  width: 1125px;
  height: 269px;

  @media screen and (max-width: 1280px) {
    width: 414px;
    height: 295px;
    padding: 0px;
    align-items: center;
  }
`;

export const Title = styled.h2`
  width: 380.93px;
  height: 159px;
  left: 54.55px;
  top: 51px;

  font-weight: 500;
  font-size: 43.6601px;
  line-height: 53px;

  color: #7e3af2;

  & > span {
    background-color: #ffc857;
    padding: 0 10px;

    @media screen and (max-width: 1280px) {
      font-size: 38px;
      color: #fefcfd;
      background-color: #7e3af2;
    }
  }

  @media screen and (max-width: 1280px) {
    width: 330px;
    height: 192px;
    font-size: 38px;
    color: #fefcfd;
  }
`;
