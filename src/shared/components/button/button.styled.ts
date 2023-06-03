import styled from "styled-components/native";

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: blue;
  justify-content: center;
  align-items: center;

  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
`;
