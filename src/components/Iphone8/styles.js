import styled from "styled-components";
import Iphone8 from "../../assets/iphone8.png";

export const Container = styled.div`
  width: 401px;
  height: 590px;
  background-image: url(${Iphone8});
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 75px;
  padding-left: 20px;

  @media screen and (max-width: 1280px) {
    padding-top: 122px;
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

  width: 310.18px;
  height: 17.16px;
`;

export const Title = styled.p`
  width: 205.18px;
  height: 19.16px;

  font-size: 16.3833px;
  line-height: 20px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Hour = styled.p`
  width: 50px;
  height: 17px;

  font-size: 14.0428px;
  line-height: 17px;

  color: #c7c7c7;
`;

export const SubTitle = styled.p`
  width: 220px;
  height: 17px;

  font-size: 14.0428px;
  line-height: 17px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Description = styled.p`
  width: 286px;
  height: 17px;

  font-size: 14.0428px;
  line-height: 17px;

  color: #8e8e8e;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
