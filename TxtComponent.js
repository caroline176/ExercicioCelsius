import { Text } from "react-native";

export default function TxtComponent({ title, styleTitle }) {
  return <Text style={styleTitle}>{title}</Text>;
}
