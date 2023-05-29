import { SafeAreaView, Text } from "react-native";

import Example from "./Example";

const App = () => {
  return (
    <SafeAreaView>
      <Text>Teste</Text>
      <Example text="Text">Teste</Example>
    </SafeAreaView>
  );
};

// View e Safeview, funcionam mais ou menos da mesma forma que o DIV, porém aqui, o div não pode receber textos nem nada do genero, ele funciona mais como um construtor
// Text é equivalente ao P

export default App;
