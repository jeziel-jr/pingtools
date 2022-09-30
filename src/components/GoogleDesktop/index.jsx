/** Styles */
import {
  Container,
  GoogleContainer,
  SearchContainer,
  SearchInput,
  GoogleNavbar,
  NavbarContainer,
  NavbarItemContainer,
  NavbarItem,
  NavbarText,
  GoogleResults,
  ResultContainer,
  ResultLink,
  ResultTitle,
  ResultDescription,
  ResultLinkExample,
  ResultTitleExample,
  ResultDescriptionExample,
} from "./styles";

/** Assets */
import GoogleLogo from "../../assets/google-Logo.png";
import SearchIcon from "../../assets/lupa.png";
import NewsIcon from "../../assets/noticias.png";
import VideosIcon from "../../assets/videos.png";
import ImagesIcon from "../../assets/imagens.png";
import MapsIcon from "../../assets/maps.png";
import MoreIcon from "../../assets/more.png";

/** Redux */
import { useSelector } from "react-redux";

export const GoogleDesktop = () => {
  const url = useSelector((state) => state.url);
  const title = useSelector((state) => state.title);
  const description = useSelector((state) => state.description);
  const keywords = useSelector((state) => state.keywords);

  // bold chosen words in description
  const makeBold = (str) => {
    return str.bold();
  };
  const chosenKeyword = boldSelectedWords();
  function boldSelectedWords() {
    const chosenKeyword = {};
    chosenKeyword.q = description;
    if (keywords.length > 0) {
      try {
        keywords.forEach((word) => {
          chosenKeyword.q = chosenKeyword.q.replace(
            new RegExp("(" + word + ")", "g"),
            makeBold("$1")
          );
        });
      } catch (e) {
        chosenKeyword.q = chosenKeyword.q.replace(
          new RegExp("(" + keywords + ")", "g"),
          makeBold("$1")
        );
      }
    }
    return chosenKeyword;
  }

  return (
    <Container>
      <GoogleContainer id="google-desktop">
        <SearchContainer>
          <img src={GoogleLogo} alt="Google Logo" />
          <SearchInput type="text" name="search" id="search" />
        </SearchContainer>
        <GoogleNavbar>
          <NavbarContainer>
            <NavbarItemContainer>
              <img src={SearchIcon} alt="Search Icon" />
              <NavbarItem color="#1A73E8">Todas</NavbarItem>
            </NavbarItemContainer>
            <NavbarItemContainer>
              <img src={NewsIcon} alt="News Icon" />
              <NavbarItem>Notícias</NavbarItem>
            </NavbarItemContainer>
            <NavbarItemContainer>
              <img src={VideosIcon} alt="Videos Icon" />
              <NavbarItem>Vídeos</NavbarItem>
            </NavbarItemContainer>
            <NavbarItemContainer>
              <img src={ImagesIcon} alt="Images Icon" />
              <NavbarItem>Imagens</NavbarItem>
            </NavbarItemContainer>
            <NavbarItemContainer>
              <img src={MapsIcon} alt="Maps Icon" />
              <NavbarItem>Maps</NavbarItem>
            </NavbarItemContainer>
            <NavbarItemContainer>
              <img src={MoreIcon} alt="More Icon" />
              <NavbarItem>Mais</NavbarItem>
            </NavbarItemContainer>
          </NavbarContainer>
          <NavbarText>
            Aproximadamente 48.400.000 resultados (0,60 segundos){" "}
          </NavbarText>
        </GoogleNavbar>
        <GoogleResults>
          <ResultContainer id="google-desktop">
            <ResultLink>
              {`${
                url == ""
                  ? "pingback.com"
                  : url
                      .replace(/(https:\/\/|http:\/\/|www\.)/g, "")
                      .replace(/\/$/, "")
                      .replace(/\//g, " > ")
                      .replace(/>$/, "")
              }`}
            </ResultLink>
            <ResultTitle>{`${
              title == "" ? "Pingback Inc." : title
            }`}</ResultTitle>
            <ResultDescription>
              {description == "" ? (
                "A Pingback é o lugar certo pra alcançar sua audiência. Temos o que você precisa para criar, engajar, gerenciar, mensurar e monetizar sua newsletter."
              ) : (
                <p dangerouslySetInnerHTML={{ __html: chosenKeyword.q }} />
              )}
            </ResultDescription>
          </ResultContainer>
          <ResultContainer>
            <ResultLinkExample></ResultLinkExample>
            <ResultTitleExample></ResultTitleExample>
            <ResultDescriptionExample></ResultDescriptionExample>
          </ResultContainer>
          <ResultContainer>
            <ResultLinkExample></ResultLinkExample>
            <ResultTitleExample></ResultTitleExample>
            <ResultDescriptionExample></ResultDescriptionExample>
          </ResultContainer>
        </GoogleResults>
      </GoogleContainer>
    </Container>
  );
};
