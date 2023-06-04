import { TextInputProps } from "react-native/types";

import { theme } from "../../themes/theme";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ContainerInput } from "./Input.styled";

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({ errorMessage, title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          customMargin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray100}
          type={textTypes.PARAGRAPH_SEMI_BOLD}
        >
          {title}
        </Text>
      )}
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text
          customMargin="4px 0px 0px 0px"
          color={theme.colors.orangeTheme.orange80}
          type={textTypes.PARAGRAPH_BOLD}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
