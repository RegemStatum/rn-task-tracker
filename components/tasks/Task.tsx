import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import st from "../../constants/styles/styles";
import { useAppContext } from "../../context/AppContext";
import PrimaryButton from "../ui/UIPrimaryButton";

interface Props {
  id: string;
}

const Task: FC<Props> = ({ children, id }) => {
  const { deleteTask, setUpdateId, updateId } = useAppContext();
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleDeletePress = () => {
    deleteTask(id);
  };

  const handleEditButtonPress = () => {
    setUpdateId(id);
  };

  useEffect(() => {
    const color = id === updateId ? "rgb(255, 242, 204)" : "#fff";
    setBackgroundColor(color);
  }, [updateId]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.controlButtons}>
        <PrimaryButton
          containerStyle={styles.deleteButton}
          textStyle={styles.buttonText}
          handlePress={handleDeletePress}
        >
          <Icon name="delete" size={24} />
        </PrimaryButton>
        <PrimaryButton
          containerStyle={styles.updateButton}
          textStyle={styles.buttonText}
          handlePress={handleEditButtonPress}
        >
          <Icon name="edit" size={24} />
        </PrimaryButton>
      </View>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  controlButtons: ViewStyle;
  deleteButton: ViewStyle;
  updateButton: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: st.indentations.ind_200,
    paddingVertical: st.indentations.ind_500,
    paddingHorizontal: st.indentations.ind_400,
    borderRadius: 4,
    backgroundColor: "#fff",
    elevation: 3,
  },
  textContainer: {
    maxWidth: "70%",
  },
  text: {},
  controlButtons: {
    flexDirection: "row",
  },
  deleteButton: {
    width: "auto",
    marginRight: st.indentations.ind_100,
    alignSelf: "flex-start",
    backgroundColor: st.colors.red_clr,
  },
  updateButton: {
    width: "auto",
    alignSelf: "flex-start",
    backgroundColor: st.colors.ylw_clr,
  },
  buttonText: {
    padding: st.indentations.ind_200,
  },
});

export default Task;
