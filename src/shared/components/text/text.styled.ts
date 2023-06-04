import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  customMargin?: string;
  fontSize: string;
  fontFamily:
    | "Poppins-Bold"
    | "Poppins-Light"
    | "Poppins-Regular"
    | "Poppins-SemiBold";
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color}; ` : ``)}
  ${(props) => (props.customMargin ? `margin: ${props.customMargin}; ` : ``)}
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  padding: 3px;
`;
