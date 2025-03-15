import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ToDoList({ tasks }) {
  return (
    <View style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task} 
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
  task: {
    fontSize: 18,
    padding: 10,
    backgroundColor: "#ddd",
    marginVertical: 5,
    width: "90%",
    textAlign: "left",
    borderRadius: 5,
  },
});
