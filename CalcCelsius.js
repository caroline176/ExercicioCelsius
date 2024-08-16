import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/styles";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";

export default function CalcCelsius() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");
  const [visible, setVisible] = useState(false);

  console.log("Resultado: ", resultado);

  const CalcCelsius = () => {
    if (celsius != "") {
      const CalcCelsius = (fahrenheit = (celsius * 9) / 5 + 32);
      setVisible(true);
      setResultado(CalcCelsius);
    } else {
      alert("Você não digitou o valor");
    }
  };
  const calcularNovamente = () => {
    setCelsius("");
    setVisible(false);

    console.log("Valor zerado: ", celsius);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Coverter fahrenheit para celsius</Text>
      <TxtInputComponent
        txtplace="Digite o valor"
        value={celsius}
        changeText={setCelsius}
      />
      <TouchableOpacity onPress={CalcCelsius}>
        <Text style={styles.btn}>Converter valor</Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <View style={styles.modal}>
          <Text>Modal</Text>
          <TouchableOpacity onPress={calcularNovamente}>
            <Text>Fechar</Text>
          </TouchableOpacity>
          <Text>{resultado}</Text>
        </View>
      </Modal>
    </View>
  );
}
