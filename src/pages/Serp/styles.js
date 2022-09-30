import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 30px 50px 18px 0px;
  gap: 31px;

  width: 1280px;
  height: 720px;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    align-items: center;
    width: 50%;
    min-width: 414px;
    height: 1150px;
    padding: 30px 0px 18px 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 13px;

  width: 229px;
  height: 39px;

  a {
    padding: 0px 18px;
    width: 108px;
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
      transform: scale(1.07);
    }
  }
`;

export const SerpContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  width: 1179.7px;
  height: 760px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 1026px;
    gap: 40px;
  }
`;
