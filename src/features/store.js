import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "./StoriesSlice";

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
  },
});
