interface Task {
  text: string;
  id: string;
}

interface AppReducerValue {
  tasks: Task[];
  updateId: string;
}

enum AppContextActionTypes {
  CREATE_TASK = "CREATE_TASK",
  DELETE_TASK = "DELETE_TASK",
  SET_UPDATE_ID = "SET_UPDATE_ID",
  UPDATE_TASK = "UPDATE_TASK",
}

interface AppContextActionCreateTask {
  type: AppContextActionTypes.CREATE_TASK;
  payload: Task;
}

interface AppContextActionDeleteTask {
  type: AppContextActionTypes.DELETE_TASK;
  payload: string;
}

interface AppContextActionUpdateTask {
  type: AppContextActionTypes.UPDATE_TASK;
  payload: Task;
}

interface AppContextActionSetUpdateId {
  type: AppContextActionTypes.SET_UPDATE_ID;
  payload: string;
}

type AppContextActions =
  | AppContextActionCreateTask
  | AppContextActionDeleteTask
  | AppContextActionUpdateTask
  | AppContextActionSetUpdateId;

export type { Task, AppContextActions };

export { AppReducerValue, AppContextActionTypes };
