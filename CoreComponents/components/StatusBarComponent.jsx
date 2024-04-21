import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, View } from "react-native";

const StatusBarComponent = () => {
  const [isStatusBarShown, setIsStatusBarShown] = useState(true);

  const toggleStatusBar = () => {
    setIsStatusBarShown(!isStatusBarShown);
  };

  return (
    <View>
      <StatusBar
        backgroundColor="lightgreen" // android only
        // style="light"
        // barStyle="light-content"
        hidden={!isStatusBarShown}
      />

      <Button title="Toggle status bar" onPress={toggleStatusBar} />
    </View>
  );
};
export default StatusBarComponent;
