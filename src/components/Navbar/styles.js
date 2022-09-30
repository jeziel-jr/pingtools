import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 26px;
  gap: 10px;
  width: 100%;
  min-width: 1280px;
  height: 87px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1280px) {
    min-width: auto;
    padding: 8px 30px;
  }
`;
export const NavbarButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  a {
    padding: 0px 18px;
    width: 82px;
    height: 39px;
    background: #fefcfd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #7e3af2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    transition: 0.3s;

    &.active {
      background: #7e3af2;
      color: white;
    }
  }
`;
