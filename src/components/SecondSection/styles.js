import styled from "styled-components";

export const ImagemBackground3 = styled.img`
  position: absolute;
  left: -376px;
  z-index: -1;
  bottom: -340px;
`;

export const Container = styled.div`
  margin: 40px auto 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 70px;

  width: 1280px;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    width: 414px;
    gap: 30px;
  }

  a {
    button {
      @media screen and (max-width: 1280px) {
        width: 350px;
      }
    }
  }
`;

export const SecondSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 135px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 30px;
    width: 414px;
  }
`;
export const SecondSectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 423px;
  height: 303px;

  @media screen and (max-width: 1280px) {
    width: 340px;
    height: 328px;
  }
`;

export const SecondSectionTitle = styled.h2`
  width: 423px;
  height: 192px;

  font-weight: 600;
  font-size: 40px;
  line-height: 48px;

  color: #7e3af2;

  @media screen and (max-width: 1280px) {
    width: 340px;
    height: 192px;
    font-size: 32px;
    color: #fefcfd;
  }
`;

export const SecondSectionText = styled.p`
  width: 421px;
  height: 96px;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #7e3af2;

  @media screen and (max-width: 1280px) {
    width: 340px;
    height: 118px;
    font-size: 18px;
    color: #fefcfd;
  }
`;

export const SecondSectionImage = styled.img`
  @media screen and (max-width: 1280px) {
    width: 414px;
  }
`;
