import styled from "styled-components/native";

import { theme } from "../../themes/theme";
import { Icon } from "../icons/Icon";

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 50px;
  padding: 15px;
  padding-right: ${(props) => (props.hasSecureTextEntry ? "60px" : "16px")};
  background-color: ${theme.colors.neutralTheme.white};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props) =>
    props.isError
      ? theme.colors.orangeTheme.orange80
      : theme.colors.grayTheme.gray80};
  color: ${theme.colors.neutralTheme.black};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 12px;
`;
