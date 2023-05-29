import { useState } from "react";
import { Button, Text, View } from "react-native";

//Exemplo de criação de props, onde, interface é o tipo de dado da props
//
// Aqui foi utilizado uma tipagem ExampleProps para identificar o que o componente espera receber, nesse caso, um atributo de nome text do tipo string que não é obrigatório (caractere ? na frente do nome significa que não é obrigatório)

// Quando utilizamos um componente, ao chamar a renderização por meio de um hook, evitamos a renderização da tela por completo
//
interface ExampleProps {
  text?: string;
  children?: string; // Atributo children é o que vem dentro do prop, como o slot do vue js
}

const Example = ({ children, text }: ExampleProps) => {
  // Essa syntaxe funciona como o unpack do python, ela vai desempacotar os dados que estão dentro do objeto props

  // No react, a tela só é renderizada na abertura da tela, para alterar algo que já foi renderizado, é necessário mudar o estado da variavel e chamar a renderização novamente por meio do useState()
  //
  // useState espera um valor, que é o inicial da variavel que ele vai mudar, nesse caso é undefined, então nada é passado
  // ele deve ser atribuido a uma constante de 2 posições, a variavel e a função que será chamada para alterar essa variavel.
  // Para alterar a variavel, é só chamar a função de alteração passando o novo valor
  const [newText, setNewText] = useState();

  const handleOnPress = () => {
    setNewText("newText");
  };

  return (
    <View>
      <Text>{children}</Text>
      <Text>{newText || text}</Text>
      <Button onPress={handleOnPress} title="Botão" />
    </View>
  );
};

export default Example;
