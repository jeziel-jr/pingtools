import styled from "styled-components";
import GooglePixel3Xl from "../../assets/google-pixel-3xl.png";

export const Container = styled.div`
  width: 411px;
  height: 491px;
  background-image: url(${GooglePixel3Xl});
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 157px;
  padding-left: 40px;

  @media screen and (max-width: 1280px) {
    background-size: 100%;
    width: 400px;
    padding-bottom: 167px;
    padding-left: 34px;
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

  width: 276.31px;
  height: 15.27px;
`;

export const Title = styled.p`
  width: 198.56px;
  height: 17.27px;

  font-weight: 700;
  font-size: 14.5794px;
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
  font-size: 12.4966px;
  line-height: 15px;

  color: #4285f4;
`;

export const SubTitle = styled.p`
  width: 149px;
  height: 15px;

  font-weight: 700;
  font-size: 12.4966px;
  line-height: 15px;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Description = styled.p`
  width: 225px;
  height: 15px;

  font-size: 12.4966px;
  line-height: 15px;

  color: #8e8e8e;

  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
