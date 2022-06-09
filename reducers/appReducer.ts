import {
  AppContextActions,
  AppContextActionTypes,
  AppReducerValue,
} from "../types/appContext";

const reducer = (
  state: AppReducerValue,
  action: AppContextActions
): AppReducerValue => {
  if (action.type === AppContextActionTypes.CREATE_TASK) {
    const newTask = action.payload;
    const newTasks = [...state.tasks, newTask];
    return { ...state, tasks: newTasks };
  }
  if (action.type === AppContextActionTypes.DELETE_TASK) {
    const taskId = action.payload;
    const newTasks = state.tasks.filter((task) => task.id !== taskId);
    return { ...state, tasks: newTasks };
  }
  if (action.type === AppContextActionTypes.UPDATE_TASK) {
    const { id: taskId, text: newTaskText } = action.payload;
    const newTasks = state.tasks.map((task) => {
      return task.id === taskId ? { id: taskId, text: newTaskText } : task;
    });
    return { ...state, tasks: newTasks };
  }
  if (action.type === AppContextActionTypes.SET_UPDATE_ID) {
    const updateId = action.payload;
    return { ...state, updateId };
  }
  return { ...state };
};

export default reducer;
