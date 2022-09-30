/** styles */
import {
  Form,
  InputContainer,
  Input,
  Label,
  ButtonContainer,
  Button,
} from "./styles";

/** Redux */
import { useDispatch, useSelector } from "react-redux";
import { changeSender, changeSubject, changeEmail } from "../../store/actions";

/** Lib for Screenshots */
import html2canvas from "html2canvas";

export const EmailForm = () => {
  const dispatch = useDispatch();
  const sender = useSelector((state) => state.sender);
  const subject = useSelector((state) => state.subject);
  const email = useSelector((state) => state.email);

  // Fill sender if empty
  const handleSenderChange = (event) => {
    dispatch(changeSender(event.target.value));
    if (event.target.value.length < 1) {
      dispatch(changeSender("Type in your sender name"));
    }
  };

  // Fill subject if empty
  const handleSubjectChange = (event) => {
    dispatch(changeSubject(event.target.value));
    if (event.target.value.length < 1) {
      dispatch(changeSubject("Type in your subject line"));
    }
  };

  // Fill email if empty
  const handleEmailChange = (event) => {
    dispatch(changeEmail(event.target.value));
    if (event.target.value.length < 1) {
      dispatch(changeEmail("Type in the first few lines of your email text"));
    }
  };

  // Save the parameters in the url
  const saveParametersToUrl = () => {
    event.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set("sender", sender);
    url.searchParams.set("subject", subject);
    url.searchParams.set("email", email);
    window.history.pushState({}, "", url);
    copyUrlToClipboard();
    url.searchParams.delete("sender");
    url.searchParams.delete("subject");
    url.searchParams.delete("email");
    window.history.pushState({}, "", url);

    document.getElementById("toastr").style.transform = "translateX(-10%)";
    setTimeout(() => {
      document.getElementById("toastr").style.transform = "translateX(100%)";
    }, 2000);
  };

  // Use the parameters that are in the URL to fill the form
  const useUrlParameters = () => {
    const url = new URL(window.location.href);
    const sender = url.searchParams.get("sender");
    const subject = url.searchParams.get("subject");
    const email = url.searchParams.get("email");
    if (sender) {
      setTimeout(() => {
        dispatch(changeSender(sender));
        url.searchParams.delete("sender");
        window.history.pushState({}, "", url);
      }, 100);
    }
    if (subject) {
      setTimeout(() => {
        dispatch(changeSubject(subject));
        url.searchParams.delete("subject");
        window.history.pushState({}, "", url);
      }, 100);
    }
    if (email) {
      setTimeout(() => {
        dispatch(changeEmail(email));
        url.searchParams.delete("email");
        window.history.pushState({}, "", url);
      }, 100);
    }
  };
  useUrlParameters();
  // Clear all form fields
  const clearAllFields = () => {
    event.preventDefault();
    dispatch(changeSender(""));
    dispatch(changeSubject(""));
    dispatch(changeEmail(""));
    clearUrlParameters();
  };

  // Delete url parameters
  const clearUrlParameters = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("sender");
    url.searchParams.delete("subject");
    url.searchParams.delete("email");
    window.history.pushState({}, "", url);
  };

  // Copy url to clipboard
  const copyUrlToClipboard = () => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url);
  };

  // Download Screenshot corresponding to the device
  const downloadScreenshot = () => {
    event.preventDefault();
    const path = window.location.pathname;
    const link = document.createElement("a");
    switch (path) {
      case "/email/iphone-xs-max":
        html2canvas(document.querySelector("#iphone-xs-max")).then((canvas) => {
          link.download = "iphone-xs-max.png";
          link.href = canvas.toDataURL();
          link.click();
        });
        break;
      case "/email/iphone-8":
        html2canvas(document.querySelector("#iphone-8")).then((canvas) => {
          link.download = "iphone-8.png";
          link.href = canvas.toDataURL();
          link.click();
        });
        break;
      case "/email/ipad-10":
        html2canvas(document.querySelector("#ipad-10")).then((canvas) => {
          link.download = "ipad-10.png";
          link.href = canvas.toDataURL();
          link.click();
        });
        break;
      case "/email/google-pixel-3-xl":
        html2canvas(document.querySelector("#google-pixel-3xl")).then(
          (canvas) => {
            link.download = "google-pixel-3xl.png";
            link.href = canvas.toDataURL();
            link.click();
          }
        );
        break;
      case "/email/samsung-galaxy-s9":
        html2canvas(document.querySelector("#samsung-galaxy-s9")).then(
          (canvas) => {
            link.download = "samsung-galaxy-s9.png";
            link.href = canvas.toDataURL();
            link.click();
          }
        );
        break;
      default:
        break;
    }
  };

  return (
    <Form>
      <InputContainer>
        <Label htmlFor="sender">Nome do remetente</Label>
        <Input
          type="text"
          placeholder="Digite o nome do seu remetente"
          id="sender"
          value={sender == "Type in your sender name" ? "" : sender}
          onChange={handleSenderChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="subject">Linha de assunto</Label>
        <Input
          type="text"
          placeholder="Digite sua linha de assunto"
          id="subject"
          height="53px"
          value={subject == "Type in your subject line" ? "" : subject}
          onChange={handleSubjectChange}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          placeholder="Digite as primeiras linhas do texto do seu e-mail"
          id="email"
          height="75px"
          value={
            email == "Type in the first few lines of your email text"
              ? ""
              : email
          }
          onChange={handleEmailChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={clearAllFields}>Limpar</Button>
        <Button onClick={saveParametersToUrl}>Compartilhar</Button>
        <Button onClick={downloadScreenshot}>Baixar</Button>
      </ButtonContainer>
    </Form>
  );
};
