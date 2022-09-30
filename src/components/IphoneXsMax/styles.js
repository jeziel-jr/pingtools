import styled from "styled-components";
import IphoneXsMax from "../../assets/iphone-xs-max.png";

export const Container = styled.div`
  width: 502px;
  height: 590px;
  background-image: url(${IphoneXsMax});
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 126px;

  @media screen and (max-width: 1280px) {
    background-size: 100%;
    width: 400px;
    padding-bottom: 172px;
    padding-left: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media screen and (max-width: 1280px) {
    width: 338px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  width: 398px;
  height: 22px;

  @media screen and (max-width: 1280px) {
    width: 338px;
  }
`;

export const Title = styled.p`
  width: 315px;
  height: 22px;

  font-size: 21px;
  line-height: 25px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
`;

export const Hour = styled.p`
  width: 70px;
  height: 22px;

  font-size: 18px;
  line-height: 22px;

  color: #c7c7c7;

  @media screen and (max-width: 1280px) {
    font-size: 15px;
  }
`;

export const SubTitle = styled.p`
  width: 340px;
  height: 22px;

  font-size: 18px;
  line-height: 22px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1280px) {
    width: 280px;
    font-size: 15px;
  }
`;

export const Description = styled.p`
  width: 367px;
  height: 22px;

  font-size: 18px;
  line-height: 22px;

  color: #8e8e8e;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1280px) {
    width: 307px;
    font-size: 15px;
  }
`;
