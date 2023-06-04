import { TextInputProps } from "react-native/types";

import { theme } from "../../themes/theme";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../text/text";
import { textTypes } from "../text/textTypes";
import { ContainerInput } from "./input.styled";

interface InputProps extends TextInputProps {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
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
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  );
};

export default Input;
