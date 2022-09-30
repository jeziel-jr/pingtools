import styled from "styled-components";

export const GoogleMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 5px;
  margin-left: 200px;
  gap: 12px;

  width: 424px;
  height: 585px;

  background: #ffffff;
  box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-width: 1280px) {
    margin-left: 0px;
    width: 380px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 382px;
  height: 92px;
`;

export const SearchInput = styled.input`
  width: 382px;
  height: 44px;
  padding: 0px 20px;

  background: rgba(217, 217, 217, 0.01);
  box-shadow: 0px 2px 5px rgba(64, 60, 67, 0.16);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  &:focus {
    outline: none;
  }

  @media (max-width: 1280px) {
    width: 338px;
  }
`;

export const GoogleNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 414px;
  height: 48px;

  border-bottom: 1px solid #ebebeb;
`;

export const NavbarItem = styled.a`
  font-size: 12px;
  line-height: 15px;

  text-align: center;

  color: ${(props) => props.color || "#5f6368"};
`;

export const GoogleResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 414px;
  height: 376px;

  background: rgba(77, 81, 86, 0.1);

  @media (max-width: 1280px) {
    width: 380px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 21px 12px;
  gap: 6px;

  width: 414px;
  height: 120px;

  background: #ffffff;

  @media screen and (max-width: 1280px) {
    width: 380px;
  }
`;

export const ResultLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
`;

export const ResultLink = styled.a`
  font-size: 10px;
  line-height: 12px;

  color: #202124;
`;

export const ResultTitle = styled.a`
  width: 350px;
  font-size: 18px;
  line-height: 22px;
  word-wrap: break-word;

  color: #1a0dab;

  @media screen and (max-width: 1280px) {
    width: 320px;
  }
`;

export const ResultDescription = styled.p`
  width: 382px;
  height: 43px;

  font-size: 12px;
  line-height: 15px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  color: #4d5156;

  @media screen and (max-width: 1280px) {
    width: 350px;
  }
`;

export const ResultTitleExample = styled.div`
  width: 186px;
  height: 16px;

  background: rgba(26, 13, 171, 0.3);
  filter: blur(1px);
`;

export const ResultDescriptionExample = styled.div`
  width: 279px;
  height: 40px;

  background: rgba(217, 217, 217, 0.3);
  filter: blur(1px);
`;
