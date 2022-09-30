import styled from "styled-components";
import SamsungGalaxyS9 from "../../assets/samsung-galaxy-s9.png";

export const Container = styled.div`
  width: 411px;
  height: 849.78px;
  background-image: url(${SamsungGalaxyS9});
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 250px;
  padding-left: 23px;

  @media screen and (max-width: 1280px) {
    padding-bottom: 199px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  width: 283.5px;
  height: 16px;
`;

export const Title = styled.p`
  width: 203.72px;
  height: 18.67px;

  font-weight: 700;
  font-size: 14.9584px;
  line-height: 18px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Hour = styled.p`
  width: 48px;
  height: 15px;

  font-weight: 600;
  font-size: 12.8215px;
  line-height: 16px;

  color: #4285f4;
`;

export const SubTitle = styled.p`
  width: 153px;
  height: 16px;

  font-weight: 700;
  font-size: 12.8215px;
  line-height: 16px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 1280px) {
    width: 163px;
  }
`;

export const Description = styled.p`
  width: 251px;

  font-size: 12.8215px;
  line-height: 16px;

  color: #8e8e8e;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
