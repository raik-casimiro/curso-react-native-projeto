import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Text, View } from "react-native";

import { useApp } from "./useApp";

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
  const [name, setName] = useState<string>("Raik");
  const [lastName, setLastName] = useState<string>("Marcondes");
  const [value1, setValue1] = useState<string>(1);
  const [value2, setValue2] = useState<string>(2);

  // O hook useEffect, vai rodar no começo quando o componente for criado e, toda vez que houver alteração nas variaveis que forem passadas no segundo parametro dele
  //
  useEffect(() => {
    console.log("useEffect");
  }, [name]);

  // Exemplo do uso de um hook useCallback, ele faz com que a criação dessa função, ocorra somente na renderização inicial da tela, ou seja, ela não vai ser recriada em uma nova renderização, diferente dos outros hooks
  // Porém ele gera outras dificuldades, nesse exemplo, como utilizamos uma variavel externa dentro do hook, é necessário recria-lo toda vez que houver alteração nessa variavel, pois de outra forma, ele não conseguiria pegar o valor novo dela
  // Para recria-lo, é só passar a variavel que deseja olhar a alteração no vetor do segundo parametro dele
  //
  // Ele é usado quando existe alguma função muito complexa que pode atrapalhar na renderização da tela ou no desempenho em geral do código, nesse caso não faz sentido usa-lo, sendo feito apenas como exemplo
  //
  const changeName = useCallback(() => {
    setName(`Raik ${lastName}`);
  }, [lastName]);

  const changeLastName = () => {
    setLastName("Casimiro");
  };

  const changeValue1 = () => {
    setValue1(value1 + 1);
  };

  const changeValue2 = () => {
    setValue2(value2 + 1);
  };

  const { value3, changeText } = useApp();

  // Exemplo de uso do hook useMemo, ele serve para manter em cache alguma ação muito pesada, nesse exemplo, o calculo leva em torno de 2s, o que ainda é pouco, mas já dá pra exemplificar
  // Esse calculo, só precisa ser executado, caso haja alteração na variavel value1, qualquer uma das outras variaveis nesse componente não é usada nele, então não faz sentido re-executar a função toda hora
  // O useMemo também pode receber como segundo parametro uma variavel que ele vai esperar atualizar para ai sim, re-executar a função interna dele
  //
  // Importante perceber que, o useMemo utiliza cache, então não deve ser usado pra tudo, pois o cache pode estourar dependendo do modelo do celular
  let sum = 0;
  const calc = useMemo(() => {
    for (i = 0; i < 9 ** 7; i++) {
      sum += value1;
    }
    return sum;
  }, [value1]);

  return (
    <View>
      <Text>{children}</Text>
      <Text>{text}</Text>
      <Text>{name}</Text>
      <Text>{value3}</Text>
      <Button onPress={changeText} title="Hook Personalizado" />
      <Button onPress={changeName} title="Nome" />
      <Button onPress={changeLastName} title="Sobrenome" />
      <Text>{value1}</Text>
      <Text>{value2}</Text>
      <Text>{calc}</Text>
      <Button onPress={changeValue1} title="value1" />
      <Button onPress={changeValue2} title="value2" />
    </View>
  );
};

export default Example;
