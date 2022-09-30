import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 1280px;
  height: 591px;
  padding: 117px 38px;
  gap: 10px;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    width: 414px;
    height: 100%;
    padding: 100px 38px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;

  width: 401px;
  height: 307px;
`;

export const Title = styled.h1`
  width: 401px;
  height: 244px;

  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;

  color: #fefcfd;

  @media screen and (max-width: 1280px) {
    width: 340px;
    font-size: 46px;
  }
`;

export const Text = styled.p`
  width: 401px;
  height: 48px;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #fefcfd;

  @media screen and (max-width: 1280px) {
    width: 340px;
    font-size: 18px;
  }
`;

export const ImagemBackground2 = styled.img`
  position: absolute;
  top: -251px;
  left: 647px;
  z-index: -1;
`;
