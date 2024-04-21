import { Button } from "react-native";

const ButtonComponent = () => {
  return (
    <Button
      title="Press me"
      onPress={() => alert("Button pressed")}
      color="midnightblue"
      //disabled
    />
  );
};
export default ButtonComponent;
