/** React Router */
import { NavLink, Outlet, useNavigate } from "react-router-dom";

/** Component */
import { SerpForm } from "../../components/SerpForm";
import { Toastr } from "../../components/Toastr";

/** Styles */
import { Container, ButtonContainer, SerpContainer } from "./styles";

/** React Hook */
import { useEffect } from "react";

/** Redux */
import { useDispatch } from "react-redux";
import { changeIsHome } from "../../store/actions";

export const Serp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // apply Google Desktop as Serp default page
  useEffect(() => {
    dispatch(changeIsHome(false));
    const url = new URL(window.location.href);
    if (
      !url.searchParams.get("url") &&
      !url.searchParams.get("title") &&
      !url.searchParams.get("description") &&
      !url.searchParams.get("keywords")
    ) {
      navigate("/serp/desktop");
    }
  }, []);
  return (
    <Container>
      <ButtonContainer>
        <NavLink to="/serp/desktop">Desktop</NavLink>
        <NavLink to="/serp/mobile">Mobile</NavLink>
      </ButtonContainer>
      <SerpContainer>
        <SerpForm />
        <Outlet />
      </SerpContainer>
      <Toastr />
    </Container>
  );
};
