import { Button, Text, View } from "react-native";

import Images from "./components/Images";
import PressableComponent from "./components/PressableComponent";
import ModalComponent from "./components/ModalComponent";
import ButtonComponent from "./components/ButtonComponent";
import StatusBarCompnent from "./components/StatusBarComponent";
import ActivityIndicatorComponent from "./components/ActivityIndicatorComponent";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* 
      <Text>Hello world!</Text>
      <Text>
        <Text style={{ color: "white" }}>Nested</Text>
        Text
      </Text>

      <View
        style={{ height: 150, width: 150, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{ height: 150, width: 150, backgroundColor: "lightgreen" }}
      ></View>
      */}

      {/* <Images /> */}
      {/* <ButtonComponent /> */}
      {/* <PressableComponent /> */}
      {/* <ModalComponent /> */}
      {/* <StatusBarCompnent /> */}
      <ActivityIndicatorComponent />
    </View>
  );
}
