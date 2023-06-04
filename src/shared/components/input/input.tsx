import { useState } from "react";
import { TextInputProps } from "react-native";
import { View } from "react-native";

import { theme } from "../../themes/theme";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ContainerInput, IconEye } from "./Input.styled";

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  customMargin?: string;
}

const Input = ({
  secureTextEntry,
  errorMessage,
  title,
  customMargin,
  ...props
}: InputProps) => {
  const [currentSecureTextEntry, setCurrentSecureTextEntry] = useState<boolean>(
    !!secureTextEntry
  );

  const handleOnPressEye = () => {
    setCurrentSecureTextEntry((current) => !current);
  };

  return (
    <DisplayFlexColumn customMargin={customMargin}>
      {title && (
        <Text
          customMargin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray100}
          type={textTypes.PARAGRAPH_SEMI_BOLD}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecureTextEntry}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecureTextEntry ? "eye-blocked" : "eye"}
            size={20}
          />
        )}
      </View>
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
