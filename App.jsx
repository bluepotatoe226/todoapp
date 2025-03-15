import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ToDoList from "./todolist"; 

export default function App() {
const [tasks, setTasks] = useState([
  "Do laundry",
    "Go to gym",
  "Walk dog",
]);


return (
  <View style={styles.container}>
  <Text style={styles.title}>My To-Do List</Text>
      <ToDoList tasks={tasks} />
    </View>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
   justifyContent: "center",
    alignItems: "center",
      padding: 20,
  backgroundColor: "#f8f9fa",
},  
  title: {
  fontSize: 24,
     fontWeight: "bold",
    marginBottom: 10,
  },
});
