import React, { FC, useContext, useReducer } from "react";
import reducer from "../reducers/appReducer";
import {
  AppContextActionTypes,
  AppReducerValue,
  Task,
} from "../types/appContext";

const initialReducerState: AppReducerValue = {
  tasks: [],
  updateId: "",
};

interface AppContextValue extends AppReducerValue {
  createTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTaskText: string) => void;
  setUpdateId: (id: string) => void;
}

const Context = React.createContext<AppContextValue>({
  ...initialReducerState,
  createTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  setUpdateId: () => {},
});

const AppContext: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  // CUD tasks
  const createTask = (task: Task) => {
    dispatch({ type: AppContextActionTypes.CREATE_TASK, payload: task });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: AppContextActionTypes.DELETE_TASK, payload: id });
  };

  const updateTask = (id: string, newTaskText: string) => {
    dispatch({
      type: AppContextActionTypes.UPDATE_TASK,
      payload: { id, text: newTaskText },
    });
  };

  const setUpdateId = (id: string) => {
    const payload = id === state.updateId ? "" : id;
    dispatch({ type: AppContextActionTypes.SET_UPDATE_ID, payload });
  };

  return (
    <Context.Provider
      value={{
        tasks: state.tasks,
        updateId: state.updateId,
        createTask,
        deleteTask,
        updateTask,
        setUpdateId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
