import {
  Alert,
  Modal as ModalReact,
  ModalProps as ModalPropsReact,
  View,
} from "react-native";

import { theme } from "../../themes/theme";
import Button from "../button/Button";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ContainerModal, IconCloseModal } from "./modal.style";

interface ModalProps extends ModalPropsReact {
  visible?: boolean;
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({
  onCloseModal,
  title,
  text,
  visible,
  ...props
}: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
      {...props}
    >
      <ContainerModal>
        <Text
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.mainTheme.primary}
        >
          {title}
        </Text>
        <Text>{text}</Text>
        <IconCloseModal
          name="cross"
          color={theme.colors.orangeTheme.orange80}
          onPress={onCloseModal}
        />
        <Button title="Ok" onPress={onCloseModal} />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
