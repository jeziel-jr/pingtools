import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 56px;
  gap: 70px;

  width: 1280px;
  height: 720px;

  @media screen and (max-width: 1280px) {
    width: 414px;
    gap: 30px;
    height: 976px;
  }

  a {
    button {
      @media screen and (max-width: 1280px) {
        width: 350px;
      }
    }
  }
`;

export const ThirdSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1116.04px;
  height: 551.86px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    width: 414px;
    gap: 70px;
    height: 1000px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  width: 531px;
  height: 270px;

  @media screen and (max-width: 1280px) {
    width: 340px;
    height: 317px;
  }
`;

export const Title = styled.h2`
  width: 423px;
  height: 96px;

  font-weight: 600;
  font-size: 40px;
  line-height: 48px;

  color: #7e3af2;

  @media screen and (max-width: 1280px) {
    width: 340px;
    height: 96px;
    font-size: 38px;
    color: #fefcfd;
  }
`;

export const Description = styled.p`
  width: 463px;
  height: 72px;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #7e3af2;

  @media screen and (max-width: 1280px) {
    width: 340px;
    height: 96px;
    font-size: 18px;
    color: #fefcfd;
  }
`;

export const Text = styled.p`
  width: 531px;
  height: 72px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #7e3af2;

  @media screen and (max-width: 1280px) {
    width: 340px;
    height: 95px;
    font-size: 18px;
    color: #fefcfd;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 1280px) {
    width: 340px;
  }
`;
