/** Redux */
import { useSelector } from "react-redux";

/** Styles */
import {
  Container,
  Content,
  TitleContainer,
  Title,
  Hour,
  SubTitle,
  Description,
} from "./styles";

export const IphoneXsMax = () => {
  const sender = useSelector((state) => state.sender);
  const subject = useSelector((state) => state.subject);
  const email = useSelector((state) => state.email);
  return (
    <Container id="iphone-xs-max">
      <Content>
        <TitleContainer>
          <Title>{`${
            sender == "" ? "Type in your sender name" : sender
          }`}</Title>
          <Hour>15:00 {">"}</Hour>
        </TitleContainer>
        <SubTitle>
          {`${subject == "" ? "Type in your subject line" : subject}`}
        </SubTitle>
        <Description>
          {`${
            email == ""
              ? "Type in the first few lines of your email text"
              : email
          }`}
        </Description>
      </Content>
    </Container>
  );
};
