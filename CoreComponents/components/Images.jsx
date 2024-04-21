import { ScrollView, Image, ImageBackground, Text } from "react-native";
import staticImage from "../assets/adaptive-icon.png";

const Images = () => {
  return (
    <ScrollView>
      <Image source={staticImage} style={{ width: 200, height: 200 }} />

      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 200, height: 200 }}
      />

      <ImageBackground
        source={{ uri: "https://picsum.photos/200" }}
        style={{ flex: 1 }}
      >
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </ScrollView>
  );
};
export default Images;
