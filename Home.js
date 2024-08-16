import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

// Import Componentes
import TxtComponent from "../components/TxtComponent";

// Import Hook useNavigation
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TxtComponent title="Home" styleTitle={styles.titulo} />

      <TouchableOpacity onPress={() => navigation.navigate("CalcCelsius")}>
        <Text style={styles.btnstyle}>Calcular valor de celsius</Text>
      </TouchableOpacity>
    </View>
  );
}
