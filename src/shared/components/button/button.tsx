import { TouchableOpacityProps } from "react-native/types";

import { theme } from "../../themes/theme";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import {
  ActivityIndicator,
  ButtonContainer,
  ButtonDisabled,
  ButtonGradient,
  ButtonSecondary,
} from "./Button.styled";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({
  loading,
  disabled,
  onPress,
  type,
  margin,
  title,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicator color={theme.colors.neutralTheme.white} />}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  } else
    switch (type) {
      case theme.buttons.buttonsTheme.secondary:
        return (
          <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
            {renderText(theme.colors.mainTheme.primary)}
          </ButtonSecondary>
        );

      case theme.buttons.buttonsTheme.primary:
      default:
        return (
          <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
            <ButtonGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              colors={[
                theme.colors.purpleTheme.purple80,
                theme.colors.pinkTheme.pink80,
              ]}
            >
              {renderText(theme.colors.neutralTheme.white)}
            </ButtonGradient>
          </ButtonContainer>
        );
    }
};

export default Button;
