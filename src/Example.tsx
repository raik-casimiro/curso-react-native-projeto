import { Text, View } from "react-native";

//Exemplo de criação de props, onde, interface é o tipo de dado da props
//
// Aqui foi utilizado uma tipagem ExampleProps para identificar o que o componente espera receber, nesse caso, um atributo de nome text do tipo string que não é obrigatório (caractere ? na frente do nome significa que não é obrigatório)

interface ExampleProps {
  text?: string;
  children?: string; // Atributo children é o que vem dentro do prop, como o slot do vue js
}

const Example = ({ children, text }: ExampleProps) => {
  // Essa syntaxe funciona como o unpack do python, ela vai desempacotar os dados que estão dentro do objeto props
  return (
    <View>
      <Text>{children}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Example;
