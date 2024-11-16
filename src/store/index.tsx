import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
import themeReducer from "./themeReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('themeState');
    if (serializedState === null) {
      return undefined; 
    }
    return { theme: JSON.parse(serializedState) }; 
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: { theme: any }) => {
  try {
    const serializedState = JSON.stringify(state.theme); 
    localStorage.setItem('themeState', serializedState);
  } catch (err) {
  }
};

export const store = configureStore({
  preloadedState: loadState(),
  reducer: {
    modal: modalReducer,
    theme: themeReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;


