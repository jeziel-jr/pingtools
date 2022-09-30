import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media screen and (max-width: 1280px) {
    overflow-x: scroll;
  }
`;

export const GoogleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  width: 753px;
  height: 460px;

  background: #ffffff;
  box-shadow: 0px 0.954472px 13.3626px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media screen and (max-width: 1280px) {
    overflow: scroll;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 92px 0px 55px;
  gap: 35px;

  width: 753px;
  height: 61px;
`;

export const SearchInput = styled.input`
  width: 483px;
  height: 41px;

  background: rgba(217, 217, 217, 0.01);
  box-shadow: 0px 1.90894px 4.77236px 0.954472px rgba(64, 60, 67, 0.16);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 22.9073px;
  padding: 0px 20px;

  &:focus {
    outline: none;
  }
`;

export const GoogleNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 753px;
  height: 91px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 125px 9.54471px 158.442px;
  gap: 19.09px;

  width: 753px;
  height: 55px;

  border-bottom: 0.954472px solid #ebebeb;
`;

export const NavbarItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 5px;

  height: 14px;
`;

export const NavbarItem = styled.a`
  font-size: 11.4537px;
  line-height: 14px;

  color: ${(props) => props.color || "#5f6368"};
`;

export const NavbarText = styled.p`
  width: 437px;
  height: 36px;
  font-size: 11.4537px;
  line-height: 41px;
  padding-left: 25px;

  color: #70757a;
`;

export const GoogleResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 0px 79px;
  gap: 25px;

  width: 753px;
  height: 298px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5.73px;

  width: 515.41px;
  height: 80.18px;
`;

export const ResultLink = styled.a`
  font-size: 11.4537px;
  line-height: 14px;

  color: #202124;
`;

export const ResultTitle = styled.a`
  max-width: 344px;
  font-weight: 400;
  font-size: 17.1805px;
  line-height: 21px;
  word-wrap: break-word;

  color: #1a0dab;
`;

export const ResultDescription = styled.p`
  max-width: 442.41px;
  height: 30.54px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 11.4537px;
  line-height: 14px;

  color: #4d5156;
`;

export const ResultLinkExample = styled.div`
  width: 171.8px;
  height: 15.27px;

  background: rgba(95, 99, 104, 0.3);
  filter: blur(0.954472px);
`;

export const ResultTitleExample = styled.div`
  width: 343.61px;
  height: 19.09px;

  background: rgba(26, 13, 171, 0.3);
  filter: blur(0.954472px);
`;

export const ResultDescriptionExample = styled.div`
  width: 515.41px;
  height: 38.18px;

  background: rgba(77, 81, 86, 0.3);
  filter: blur(0.954472px);
`;
