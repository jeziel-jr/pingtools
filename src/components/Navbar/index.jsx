/** Assets */
import logoPingtools from "../../assets/logo-pingtools.png";
import logoPingtoolsSecondary from "../../assets/logo-pingtools-secondary.png";
import gradiente from "../../assets/background.png";

/** Styles */
import { NavbarButtonContainer, NavbarContainer } from "./styles";

/** React Router */
import { NavLink } from "react-router-dom";

/** React Hook */
import { useEffect } from "react";

/** Redux */
import { useDispatch, useSelector } from "react-redux";
import { changeIsHome, changeScreenWidth } from "../../store/actions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isHome = useSelector((state) => state.isHome);
  const screenWidth = useSelector((state) => state.screenWidth);

  const changeScreen = () => {
    dispatch(changeScreenWidth(window.innerWidth));
  };
  changeScreen();
  window.addEventListener("resize", changeScreen);

  // Set background according to section and screen size
  useEffect(() => {
    const body = document.querySelector("body");
    if (window.location.pathname === "/" && screenWidth > 1280) {
      body.style.backgroundImage = `url(${gradiente})`;
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundPosition = "center";
    } else if (window.location.pathname === "/" && screenWidth <= 1280) {
      body.style.background =
        "linear-gradient(121.99deg, #7E3AF2 15.52%, #ffa857 92.23%)";
    } else {
      body.style.backgroundImage = "none";
    }
  }, [screenWidth, isHome]);

  // Set logo according to site section
  function changeLogoColor() {
    dispatch(changeIsHome(true));
  }

  return (
    <NavbarContainer>
      <NavLink to="/">
        {isHome ? (
          <img onClick={changeLogoColor} src={logoPingtools} alt="logo" />
        ) : (
          <img
            onClick={changeLogoColor}
            src={logoPingtoolsSecondary}
            alt="logo"
          />
        )}
      </NavLink>
      <NavbarButtonContainer>
        <NavLink to="/serp">SERP</NavLink>
        <NavLink to="/email">Email</NavLink>
      </NavbarButtonContainer>
    </NavbarContainer>
  );
};
