/** Assets */
import imgPhone from "../../assets/img-celular.png";

/** React Router */
import { NavLink } from "react-router-dom";

/** Component */
import { Button } from "../Button";

/** Styles */
import {
  Container,
  ThirdSectionContainer,
  TextContainer,
  Title,
  Description,
  Text,
  Image,
} from "./styles";

export const ThirdSection = () => {
  return (
    <Container>
      <ThirdSectionContainer>
        <TextContainer>
          <Title>O email também é importante.</Title>
          <Description>
            A forma como seu e-mail é exibido quando chega à caixa de entrada é
            um fator importante para os usuários decidirem se vão abrir ou não.{" "}
          </Description>
          <Text>
            Então antes de enviar seu e-mail, teste com nosso visualizador de
            caixa de entrada e otimize suas campanhas para aumentar suas taxas
            de abertura.
          </Text>
        </TextContainer>
        <Image src={imgPhone} alt="Celular" />
      </ThirdSectionContainer>
      <NavLink to="/email">
        <Button secondary width="396px" height="48px">
          Visualizador de caixa de entrada
        </Button>
      </NavLink>
    </Container>
  );
};
