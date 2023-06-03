import { TouchableOpacityProps } from "react-native/types";
import LinearGradient from "react-native-linear-gradient";

import { theme } from "../../themes/theme";
import Text from "../text/text";
import { textTypes } from "../text/textTypes";
import {
  ButtonContainer,
  ButtonGradient,
  ButtonSecondary,
} from "./button.styled";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ type, margin, title, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text
            type={textTypes.BUTTON_LIGHT}
            color={theme.colors.mainTheme.primary}
          >
            {title}
          </Text>
        </ButtonSecondary>
      );

    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer margin={margin} {...props}>
          <ButtonGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[
              theme.colors.purpleTheme.purple80,
              theme.colors.pinkTheme.pink80,
            ]}
          >
            <Text
              type={textTypes.BUTTON_LIGHT}
              color={theme.colors.neutralTheme.white}
            >
              {title}
            </Text>
          </ButtonGradient>
        </ButtonContainer>
      );
  }
};

export default Button;
