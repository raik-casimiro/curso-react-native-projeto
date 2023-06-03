import { useEffect, useState } from "react";

export const useApp = () => {
  const [value3, setText] = useState<string>("Teste");

  const changeText = () => {
    setText("Hook personalizado");
  };

  useEffect(() => {
    console.log("Teste hookPersonalizado");
  }, []);

  return {
    value3,
    changeText,
  };
};
