/** Assets */
import SecondaryLogo from "../../assets/logo-pingtools-footer.png";

/** Styles */
import { Container, TextContainer, Title, LogoImage } from "./styles";

export const FourthSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <TextContainer>
        <Title>
          Teste com nossos visualizadores e <span>não erre mais.</span>
        </Title>
      </TextContainer>
      <LogoImage
        src={SecondaryLogo}
        alt="Logo PingTools"
        onClick={scrollToTop}
      />
    </Container>
  );
};
