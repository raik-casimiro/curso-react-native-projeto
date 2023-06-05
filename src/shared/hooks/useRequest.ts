import { useState } from "react";

import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../components/modal/globalModal/useGlobalReducer";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { RequestLogin } from "../types/requestLogin";
import { ReturnLogin } from "../types/returnLogin";

export const useRequest = () => {
  const { setUser } = useUserReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setModal } = useGlobalReducer();

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    await connectionAPIPost<ReturnLogin>("http://192.168.0.2:8080/auth", body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setModal({
          title: "Erro",
          text: "Usuário ou senha inválidos",
          visible: true,
        });
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
