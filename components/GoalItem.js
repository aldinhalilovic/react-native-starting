import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.singleGoalContainer}>
      <Pressable
        onPress={props.removeItem.bind(this, props.id)}
        android_ripple={{ color: "black" }}
        style={({ pressed }) => pressed && styles.pressedGoal}
      >
        <Text style={styles.goal}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  singleGoalContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goal: {
    padding: 10,
    color: "white",
  },
  pressedGoal: {
    opacity: 0.5,
  },
});
