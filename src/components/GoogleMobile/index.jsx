/** Assets */
import GoogleLogo from "../../assets/google-Logo-mobile.png";
import PingbackLogo from "../../assets/pingback-logo.png";
import EarthLogo from "../../assets/icon-earth.png";

/** Styles */
import {
  GoogleMobileContainer,
  SearchContainer,
  SearchInput,
  GoogleNavbar,
  NavbarItem,
  GoogleResults,
  ResultContainer,
  ResultLinkContainer,
  ResultLink,
  ResultTitle,
  ResultDescription,
  ResultTitleExample,
  ResultDescriptionExample,
} from "./styles";

/** Redux */
import { useSelector } from "react-redux";

export const GoogleMobile = () => {
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
    const boldWords = keywords;
    if (boldWords.length > 0) {
      boldWords.forEach((word) => {
        chosenKeyword.q = chosenKeyword.q.replace(
          new RegExp("(" + word + ")", "g"),
          makeBold("$1")
        );
      });
    }
    return chosenKeyword;
  }
  return (
    <GoogleMobileContainer id="google-mobile">
      <SearchContainer>
        <img src={GoogleLogo} alt="Google Logo" />
        <SearchInput type="text" name="search" id="search" />
      </SearchContainer>
      <GoogleNavbar>
        <NavbarItem color="#1A73E8">Todas</NavbarItem>
        <NavbarItem>Notícias</NavbarItem>
        <NavbarItem>Vídeos</NavbarItem>
        <NavbarItem>Imagens</NavbarItem>
        <NavbarItem>Maps</NavbarItem>
        <NavbarItem>Mais</NavbarItem>
      </GoogleNavbar>
      <GoogleResults>
        <ResultContainer>
          <ResultLinkContainer>
            <img src={PingbackLogo} />
            <ResultLink>
              {url
                .replace(/(https:\/\/|http:\/\/|www\.)/g, "")
                .replace(/\/$/, "")
                .replace(/\//g, " > ")
                .replace(/>$/, "")}
            </ResultLink>
          </ResultLinkContainer>
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
          <img src={EarthLogo} />
          <ResultTitleExample></ResultTitleExample>
          <ResultDescriptionExample></ResultDescriptionExample>
        </ResultContainer>
        <ResultContainer>
          <img src={EarthLogo} />
          <ResultTitleExample></ResultTitleExample>
          <ResultDescriptionExample></ResultDescriptionExample>
        </ResultContainer>
      </GoogleResults>
    </GoogleMobileContainer>
  );
};
