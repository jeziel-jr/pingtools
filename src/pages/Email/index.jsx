/** React Hook */
import { useEffect } from "react";

/** Redux */
import { useDispatch } from "react-redux";
import { changeIsHome } from "../../store/actions";

/** React Router  */
import { NavLink, Outlet, useNavigate } from "react-router-dom";

/** Component */
import { EmailForm } from "../../components/EmailForm";
import { Toastr } from "../../components/Toastr";

/** Styles */
import {
  Container,
  EmailContainer,
  ButtonAndPhoneContainer,
  ButtonContainer,
} from "./styles";

export const Email = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // apply iPhone xs max as default Email page
  useEffect(() => {
    dispatch(changeIsHome(false));
    const url = new URL(window.location.href);
    if (
      !url.searchParams.get("sender") &&
      !url.searchParams.get("subject") &&
      !url.searchParams.get("email")
    ) {
      navigate("/email/iphone-xs-max");
    }
  }, []);
  return (
    <Container>
      <EmailContainer>
        <EmailForm />
        <ButtonAndPhoneContainer>
          <ButtonContainer>
            <NavLink to="/email/iphone-xs-max">IPHONE XS MAX</NavLink>
            <NavLink to="/email/iphone-8">IPHONE 8</NavLink>
            <NavLink to="/email/ipad-10">IPAD 10”</NavLink>
            <NavLink to="/email/google-pixel-3-xl">GOOGLE PIXEL 3 XL</NavLink>
            <NavLink to="/email/samsung-galaxy-s9">SAMSUNG GALAXY S9</NavLink>
          </ButtonContainer>
          <Outlet />
        </ButtonAndPhoneContainer>
      </EmailContainer>
      <Toastr />
    </Container>
  );
};
