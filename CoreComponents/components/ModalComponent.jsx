import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <View>
      <Modal
        visible={isModalOpen}
        onRequestClose={handleCloseModal}
        animationType="slide"
        presentationStyle="formSheet" //iOS only
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            onPress={handleCloseModal}
            title="Close modal"
            color="midnightblue"
          />
        </View>
      </Modal>

      <Button
        onPress={handleOpenModal}
        title="Open modal"
        color="midnightblue"
      />
    </View>
  );
};
export default ModalComponent;
