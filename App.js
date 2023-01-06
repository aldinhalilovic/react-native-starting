import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [listGoal, setListGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addListGoal(goalText) {
    setListGoal((prev) => [
      ...prev,
      { text: goalText, id: Math.random().toString() },
    ]);
    hideModal();
  }

  function removeGoal(id) {
    setListGoal((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  }

  function showModal() {
    setModalIsVisible(true);
  }

  function hideModal() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add your goal" color="#5e0acc" onPress={showModal} />
      <GoalInput
        onAddGoal={addListGoal}
        showModal={modalIsVisible}
        onClose={hideModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listGoal}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                removeItem={removeGoal}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
