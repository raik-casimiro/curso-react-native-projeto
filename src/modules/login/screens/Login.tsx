import { View } from "react-native";

import Button from "../../../shared/components/button/button";
import Input from "../../../shared/components/input/input";
import { theme } from "../../../shared/themes/theme";
import { ContainerLogin } from "../styles/login.style";

const Login = () => {
  const handleOnPress = () => {
    console.log("Login Clicked");
  };

  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="10px"
          title="Login"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
