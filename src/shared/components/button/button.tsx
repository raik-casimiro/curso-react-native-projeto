import { TouchableOpacityProps } from "react-native/types";

import { theme } from "../../themes/theme";
import Text from "../text/text";
import { textTypes } from "../text/textTypes";
import { ButtonContainer } from "./button.styled";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ margin, title, ...props }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text type={textTypes.TITLE} color={theme.colors.neutralTheme.white}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
