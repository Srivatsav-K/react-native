import { useState } from "react";
import { ActivityIndicator, Button, View } from "react-native";

const ActivityIndicatorComponent = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimating = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={isAnimating}
      />

      <Button title="Toggle animating" onPress={toggleAnimating} />
    </View>
  );
};
export default ActivityIndicatorComponent;
