import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../../store/hooks";
import { setModalAction } from "../../../../store/reducers/globalReducer";
import { GlobalModalType } from "./GlobalModal";

export const useGlobalReducer = () => {
  const modal = useAppSelector((state) => state.globalReducer.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(
      setModalAction({
        ...modal,
        visible: false,
      })
    );
  };

  const setModal = (currentModal: GlobalModalType) => {
    dispatch(setModalAction(currentModal));
  };

  return { modal, closeModal, setModal };
};
