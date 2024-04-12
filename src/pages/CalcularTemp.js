import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import TextoInputComponent from "../components/TextoInputComponent";
import { styles } from "../style/Style";

export default function CalcularTemp() {
  const [temperatura, setTemperatura] = useState("");
  const [visible, setVisible] = useState(false);

  const calc_temp = () => {
    const CalcTemp = (temperatura * 9 / 5) + 32;
    setTemperatura(CalcTemp.toFixed(2));
    setVisible(true);
  };

  const calcularNovamente = () => {
    setTemperatura("");
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Converter Temperatura</Text>
      <TextoInputComponent
        txtplace="Digite o valor em Celsius"
        value={temperatura}
        changeText={setTemperatura}
      />
      <TouchableOpacity style={styles.button} onPress={calc_temp}>
        <Text style={styles.buttonText}>Converter Temperatura</Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Temperatura Convertida</Text>
          <Text style={styles.result}>{temperatura} °F</Text>
          <TouchableOpacity style={styles.button} onPress={calcularNovamente}>
            <Text style={styles.buttonText}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}


