import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  KeyboardAvoidingView,
} from "react-native";
import TasksList from "../components/tasks/TasksList";
import { Title, UITextInput } from "../components/ui";
import UIPrimaryButton from "../components/ui/UIPrimaryButton";
import st from "../constants/styles/styles";
import { useAppContext } from "../context/AppContext";

const HomeScreen = () => {
  const [currentTaskText, setCurrentTaskText] = useState("");
  const { tasks, createTask, updateTask, setUpdateId, updateId } =
    useAppContext();

  const handleTaskInputChange = (text: string) => {
    setCurrentTaskText(text);
  };

  const handleAddButtonPress = () => {
    // return if input is empty
    if (!currentTaskText) {
      return;
    }
    // update task
    if (updateId) {
      updateTask(updateId, currentTaskText);
      setCurrentTaskText("");
      setUpdateId("");
      return;
    }
    // create new task
    const newTask = {
      id: new Date().toString(),
      text: currentTaskText,
    };
    createTask(newTask);
    setCurrentTaskText("");
  };

  const addUpdateButtonText = updateId ? "Update" : "Add";
  const inputPlaceholderText = updateId ? "New text" : "New task";

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        {/* title */}
        <Title containerStyle={styles.titleContainer}>Task Tracker</Title>
        {/* task input */}
        <UITextInput
          value={currentTaskText}
          onChangeText={handleTaskInputChange}
          placeholder={inputPlaceholderText}
        />
        {/* add or update task button */}
        <UIPrimaryButton
          handlePress={handleAddButtonPress}
          containerStyle={styles.addUpdateButton}
        >
          {addUpdateButtonText}
        </UIPrimaryButton>
      </KeyboardAvoidingView>
      {/* tasks */}
      <TasksList tasks={tasks} />
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  addUpdateButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: "100%",
    flex: 1,
  },
  titleContainer: {
    marginVertical: st.indentations.ind_800,
  },
  addUpdateButton: {
    marginTop: st.indentations.ind_200,
    marginBottom: st.indentations.ind_800,
  },
});

export default HomeScreen;
