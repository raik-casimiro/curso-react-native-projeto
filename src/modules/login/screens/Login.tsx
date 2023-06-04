import { View } from "react-native";

import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import { theme } from "../../../shared/themes/theme";
import { useLogin } from "../hooks/useLogin";
import { ContainerLogin, ImageLogo } from "../styles/login.style";

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleOnPress,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo
          resizeMode="center"
          source={require("../../../assets/images/logo.png")}
        />
        <Input
          customMargin="0px 0px 16px 0px"
          title="Email"
          placeholder="Digite seu email"
          value={email}
          errorMessage={errorMessage}
          onChange={handleOnChangeEmail}
        />
        <Input
          secureTextEntry
          onChange={handleOnChangePassword}
          title="Senha"
          value={password}
          errorMessage={errorMessage}
          placeholder="Digite sua senha"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="10px"
          title="Login"
          loading={loading}
          disabled={loading}
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
