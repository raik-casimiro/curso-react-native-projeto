import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

import { theme } from "../../themes/theme";

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
`;

export const ButtonGradient = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
`;

export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  background-color: ${theme.colors.grayTheme.gray100};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-left: 10px;
`;
