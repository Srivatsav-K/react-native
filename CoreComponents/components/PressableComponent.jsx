import { Image, Pressable, ScrollView, Text } from "react-native";

const PressableComponent = () => {
  return (
    <ScrollView>
      <Pressable
        onPressIn={() => {
          console.log("onPressIn triggered");
        }}
        onLongPress={() => {
          console.log("onLongPress is triggered");
        }}
        onPressOut={() => {
          console.log("onPressOut triggered");
        }}
        onPress={() => console.log("Image pressed")}
      >
        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 300, height: 300 }}
        />
      </Pressable>

      <Pressable onPress={() => console.log("Text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam id
          pariatur, recusandae doloremque fugit ullam culpa modi. Provident
          quaerat a obcaecati, omnis quasi voluptatum velit unde cupiditate quos
          tempore, quidem magni eos veniam voluptates autem dolores commodi
          numquam officiis quisquam qui tenetur? Obcaecati optio rerum ullam
          voluptas possimus omnis consequuntur!
        </Text>
      </Pressable>
    </ScrollView>
  );
};
export default PressableComponent;
