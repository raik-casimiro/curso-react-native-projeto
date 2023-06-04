import styled from "styled-components/native";

import { theme } from "../../themes/theme";

export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 15px;
  background-color: ${theme.colors.neutralTheme.white};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${theme.colors.grayTheme.gray80};
  color: ${theme.colors.neutralTheme.black};
`;
