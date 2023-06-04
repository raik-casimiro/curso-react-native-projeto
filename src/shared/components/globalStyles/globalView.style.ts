import styled from "styled-components";

interface DisplayProps {
  customMargin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${(props) => (props.customMargin ? props.customMargin : "0px")};
`;
