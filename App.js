import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Click me!"
        onPress={() => console.log("first")}
        color={"black"}
      />
      <Text
        style={{
          borderWidth: 2,
          borderColor: "blue",
          margin: 12,
          padding: 12,
        }}
      >
        dslkfjdslkfj
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
