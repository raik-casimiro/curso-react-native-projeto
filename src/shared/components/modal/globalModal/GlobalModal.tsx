import Modal from "../Modal";
import { useGlobalReducer } from "./useGlobalReducer";

const GlobalModal = () => {
  const { modal, closeModal } = useGlobalReducer();

  return (
    <Modal
      title={modal.title}
      text={modal.text}
      onCloseModal={closeModal}
      visible={modal.visible}
    />
  );
};

export interface GlobalModalType {
  visible: boolean;
  title: string;
  text: string;
}

export default GlobalModal;
