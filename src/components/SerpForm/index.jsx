/** Styles */
import {
  FormContainer,
  TextFieldContainer,
  LabelContainer,
  Label,
  ProgressBar,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  Counter,
} from "./styles";

/** Redux */
import { useDispatch, useSelector } from "react-redux";
import {
  changeUrl,
  changeTitle,
  changeDescription,
  changeKeywords,
} from "../../store/actions";

/** Lib for Screenshots */
import html2canvas from "html2canvas";

export const SerpForm = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);
  const title = useSelector((state) => state.title);
  const description = useSelector((state) => state.description);
  const keywords = useSelector((state) => state.keywords);

  // Fill url if empty
  const handleUrlChange = (event) => {
    dispatch(changeUrl(event.target.value));
    if (event.target.value.length < 1) {
      dispatch(changeUrl("https://pingback.com"));
    }
  };

  // Fill title if empty
  const handleTitleChange = (event) => {
    dispatch(changeTitle(event.target.value));
    if (event.target.value.length < 1) {
      dispatch(changeTitle("Pingback Inc."));
    }
  };

  // Fill description if empty
  const handleDescriptionChange = (event) => {
    dispatch(changeDescription(event.target.value));
    if (event.target.value.length < 1) {
      dispatch(
        changeDescription(
          "A Pingback é o lugar certo pra alcançar sua audiência. Temos o que você precisa para criar, engajar, gerenciar, mensurar e monetizar sua newsletter."
        )
      );
    }
  };

  // select the keywords
  const handleKeywordsChange = (event) => {
    const item = event.target.value;
    const newItem = item.split(",");

    dispatch(changeKeywords(newItem));
  };

  // Save the parameters in the url
  const saveParametersToUrl = () => {
    event.preventDefault();
    const serpUrl = new URL(window.location.href);
    serpUrl.searchParams.set("url", url);
    serpUrl.searchParams.set("title", title);
    serpUrl.searchParams.set("description", description);
    serpUrl.searchParams.set("keywords", keywords);
    window.history.pushState({}, "", serpUrl);
    copyUrlToClipboard();
    serpUrl.searchParams.delete("url");
    serpUrl.searchParams.delete("title");
    serpUrl.searchParams.delete("description");
    serpUrl.searchParams.delete("keywords");
    window.history.pushState({}, "", serpUrl);

    document.getElementById("toastr").style.transform = "translateX(-10%)";
    setTimeout(() => {
      document.getElementById("toastr").style.transform = "translateX(100%)";
    }, 2000);
  };

  // Use the parameters that are in the URL to fill the form
  const useUrlParameters = () => {
    const serpUrl = new URL(window.location.href);
    const url = serpUrl.searchParams.get("url");
    const title = serpUrl.searchParams.get("title");
    const description = serpUrl.searchParams.get("description");
    const keywords = serpUrl.searchParams.get("keywords");
    if (url) {
      setTimeout(() => {
        dispatch(changeUrl(url));
        serpUrl.searchParams.delete("url");
        window.history.pushState({}, "", serpUrl);
      }, 100);
    }
    if (title) {
      setTimeout(() => {
        dispatch(changeTitle(title));
        serpUrl.searchParams.delete("title");
        window.history.pushState({}, "", serpUrl);
      }, 100);
    }
    if (description) {
      setTimeout(() => {
        dispatch(changeDescription(description));
        serpUrl.searchParams.delete("description");
        window.history.pushState({}, "", serpUrl);
      }, 100);
    }
    if (keywords) {
      setTimeout(() => {
        const keywordsArray = keywords.split(",");
        dispatch(changeKeywords(keywordsArray));
        serpUrl.searchParams.delete("keywords");
        window.history.pushState({}, "", serpUrl);
      }, 100);
    }
  };
  useUrlParameters();

  // Clear all form fields
  const clearAllFields = () => {
    event.preventDefault();
    dispatch(changeUrl(""));
    dispatch(changeTitle(""));
    dispatch(changeDescription(""));
    dispatch(changeKeywords(""));
    clearUrlParameters();

    if (event.target.value.length < 1) {
      dispatch(changeUrl("https://pingback.com"));
    }

    if (event.target.value.length < 1) {
      dispatch(changeTitle("Pingback Inc."));
    }

    if (event.target.value.length < 1) {
      dispatch(
        changeDescription(
          "A Pingback é o lugar certo pra alcançar sua audiência. Temos o que você precisa para criar, engajar, gerenciar, mensurar e monetizar sua newsletter."
        )
      );
    }
  };

  // Delete url parameters
  const clearUrlParameters = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("url");
    url.searchParams.delete("title");
    url.searchParams.delete("description");
    url.searchParams.delete("keywords");
    window.history.pushState({}, "", url);
  };

  // Copy url to clipboard
  const copyUrlToClipboard = () => {
    event.preventDefault();
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url);
  };
  // html2canvas options
  const options = {
    allowTaint: false,
    scale: 2,
    backgroundColor: null,
    x: 0,
    y: 0,
  };

  // Download Screenshot corresponding to the screen
  const downloadScreenshot = () => {
    event.preventDefault();
    const path = window.location.pathname;
    const link = document.createElement("a");
    switch (path) {
      case "/serp/desktop":
        html2canvas(document.querySelector("#google-desktop"), options).then(
          (canvas) => {
            link.download = "screenshot.png";
            link.href = canvas.toDataURL();
            link.click();
          }
        );
        break;
      case "/serp/mobile":
        html2canvas(document.querySelector("#google-mobile"), options).then(
          (canvas) => {
            link.download = "screenshot.png";
            link.href = canvas.toDataURL();
            link.click();
          }
        );
        break;
      default:
        break;
    }
  };

  // change progress bar according to description size
  const descriptionProgressStyle = () => {
    const descriptionProgress = (description.length * 100) / 138;
    const descriptionProgressBar = document.getElementById(
      "descriptionProgressBar"
    );
    if (
      description !=
      "A Pingback é o lugar certo pra alcançar sua audiência. Temos o que você precisa para criar, engajar, gerenciar, mensurar e monetizar sua newsletter."
    ) {
      descriptionProgressBar.style.width = `${descriptionProgress}%`;
      if (description.length <= 83) {
        descriptionProgressBar.style.backgroundColor = "#bd462e";
      } else if (description.length <= 138) {
        descriptionProgressBar.style.backgroundColor = "#1ba005";
      } else {
        descriptionProgressBar.style.backgroundColor = "#bd462e";
        descriptionProgressBar.style.width = "100%";
      }
    } else {
      descriptionProgressBar.style.width = "0%";
    }
  };
  setTimeout(() => {
    descriptionProgressStyle();
  }, 100);

  // change progress bar according to title size
  const titleProgressStyle = () => {
    const titleProgress = (title.length * 100) / 62;
    const titleProgressBar = document.getElementById("titleProgressBar");
    if (title != "Pingback Inc.") {
      titleProgressBar.style.width = `${titleProgress}%`;
      if (title.length <= 16) {
        titleProgressBar.style.backgroundColor = "#bd462e";
      } else if (title.length <= 60) {
        titleProgressBar.style.backgroundColor = "#1ba005";
      } else {
        titleProgressBar.style.backgroundColor = "#bd462e";
        titleProgressBar.style.width = "100%";
      }
    } else {
      titleProgressBar.style.width = "0%";
    }
  };
  setTimeout(() => {
    titleProgressStyle();
  }, 100);

  return (
    <FormContainer>
      <TextFieldContainer>
        <Label htmlFor="url">URL</Label>
        <Input
          height="40.54px"
          type="text"
          id="url"
          placeholder="pingback.com"
          value={url == "https://pingback.com" ? "" : url}
          onChange={handleUrlChange}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <LabelContainer>
          <Label htmlFor="title">Título</Label>
          <Counter>
            {title == "Pingback Inc." ? "0" : title.length}/62 caracteres
          </Counter>
        </LabelContainer>
        <ProgressBar id="titleProgressBar"></ProgressBar>
        <Input
          height="50.59px"
          type="text"
          id="title"
          placeholder="Tente manter o título abaixo de 70 caracteres para exibi-lo em tamanho real."
          value={title == "Pingback Inc." ? "" : title}
          onChange={handleTitleChange}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <LabelContainer>
          <Label htmlFor="description">Descrição</Label>
          <Counter>
            {description ==
            "A Pingback é o lugar certo pra alcançar sua audiência. Temos o que você precisa para criar, engajar, gerenciar, mensurar e monetizar sua newsletter."
              ? "0"
              : description.length}
            /138 caracteres
          </Counter>
        </LabelContainer>
        <ProgressBar id="descriptionProgressBar"></ProgressBar>
        <TextArea
          name="description"
          id="description"
          cols="30"
          rows="10"
          height="71.59px"
          wrap="hard"
          placeholder="A meta descrição pode ser cortada em ~ 960 pixels na área de trabalho e em ~ 680 pixels no celular. Mantenha-o abaixo de ~ 158 caracteres."
          value={
            description ==
            "A Pingback é o lugar certo pra alcançar sua audiência. Temos o que você precisa para criar, engajar, gerenciar, mensurar e monetizar sua newsletter."
              ? ""
              : description
          }
          onChange={handleDescriptionChange}
        ></TextArea>
      </TextFieldContainer>
      <TextFieldContainer>
        <Label htmlFor="keywords">Palavras-chave em negrito</Label>
        <Input
          height="40.54px"
          type="text"
          id="keywords"
          placeholder="Separe com vírgula"
          value={keywords}
          onChange={handleKeywordsChange}
        />
      </TextFieldContainer>
      <ButtonContainer>
        <Button onClick={clearAllFields}>Limpar</Button>
        <Button onClick={saveParametersToUrl}>Compartilhar</Button>
        <Button onClick={downloadScreenshot}>Baixar</Button>
      </ButtonContainer>
    </FormContainer>
  );
};
