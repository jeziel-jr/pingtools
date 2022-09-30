/** Assets */
import googleDesktop from "../../assets/google-desktop.png";

/** React Router */
import { NavLink } from "react-router-dom";

/** Styles */
import {
  Container,
  SecondSectionContainer,
  SecondSectionTextContainer,
  SecondSectionTitle,
  SecondSectionText,
  SecondSectionImage,
} from "./styles";

/** Component */
import { Button } from "../Button";

export const SecondSection = () => {
  return (
    <Container>
      <SecondSectionContainer>
        <SecondSectionTextContainer>
          <SecondSectionTitle>
            Veja como sua empresa vai aparecer no Google quando procurarem por
            ela.
          </SecondSectionTitle>
          <SecondSectionText>
            A SERP (ou Search Engine Results Page) é a lista de resultados das
            pesquisas feitas na Internet. Uma boa SERP te ajuda a liderar as
            pesquisas e te dispara dos concorrentes.
          </SecondSectionText>
        </SecondSectionTextContainer>
        <SecondSectionImage src={googleDesktop} />
      </SecondSectionContainer>
      <NavLink to="/serp">
        <Button secondary width="396px" height="48px">
          Visualizador de SERP
        </Button>
      </NavLink>
    </Container>
  );
};
