import { View } from "react-native";

import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import { theme } from "../../../shared/themes/theme";
import { ContainerLogin } from "../styles/login.style";

const Login = () => {
  const handleOnPress = () => {
    console.log("Login Clicked");
  };

  return (
    <View>
      <ContainerLogin>
        <Input
          customMargin="0px 0px 16px 0px"
          title="Email"
          placeholder="Digite seu email"
        />
        <Input secureTextEntry title="Senha" placeholder="Digite sua senha" />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="10px"
          title="Login"
          loading
          disabled
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
