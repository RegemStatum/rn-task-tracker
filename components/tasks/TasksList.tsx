import React, { FC } from "react";
import { FlatList, ListRenderItem } from "react-native";
import TaskItem from "./Task";
import { Task } from "../../types/appContext";

interface Props {
  tasks: Task[];
}

const TasksList: FC<Props> = ({ tasks }) => {
  const renderTaskItem: ListRenderItem<Task> = ({ item }) => (
    <TaskItem id={item.id}>{item.text}</TaskItem>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TasksList;
