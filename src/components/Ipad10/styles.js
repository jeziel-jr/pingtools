import styled from "styled-components";
import Ipad10 from "../../assets/ipad10.png";

export const Container = styled.div`
  width: 661px;
  height: 830.73px;
  background-image: url(${Ipad10});
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 14px;
  padding-left: 96px;

  @media screen and (max-width: 1280px) {
    background-size: 100%;
    width: 414px;

    padding-top: 0;
    padding-left: 57px;
    padding-bottom: 165px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media screen and (max-width: 1280px) {
    gap: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  width: 350.99px;
  height: 19.4px;

  @media screen and (max-width: 1280px) {
    width: 219.83px;
    gap: 5.52px;
  }
`;

export const Title = styled.p`
  width: 231.94px;
  height: 19.4px;

  font-size: 18.5195px;
  line-height: 22px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1280px) {
    font-size: 11.5992px;
  }
`;

export const Hour = styled.p`
  width: 57px;
  height: 19px;

  font-size: 15.8739px;
  line-height: 19px;

  color: #c7c7c7;

  @media screen and (max-width: 1280px) {
    font-size: 9.94219px;
  }
`;

export const SubTitle = styled.p`
  width: 183px;
  height: 19px;

  font-size: 15.8739px;
  line-height: 19px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1280px) {
    font-size: 9.94219px;
  }
`;

export const Description = styled.p`
  width: 323px;
  height: 19px;

  font-size: 15.8739px;
  line-height: 19px;

  color: #8e8e8e;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1280px) {
    width: 205px;
    font-size: 9.94219px;
  }
`;
