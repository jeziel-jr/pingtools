/** styles */
import { MainButton } from "./styles";

export const Button = ({ children, ...props }) => {
  return <MainButton {...props}>{children}</MainButton>;
};
