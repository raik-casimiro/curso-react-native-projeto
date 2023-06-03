import { Text } from "react-native";
import { TouchableOpacityProps } from "react-native/types";

import { ButtonContainer } from "./button.styled";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ margin, title, ...props }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
