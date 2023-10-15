import { createSlice } from "@reduxjs/toolkit";
import dummy_data from "../Data/Data";

const initialState = [...dummy_data];

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const storyId = action.payload;
      const story = state.find((story) => story.id === storyId);
      story.likes += 1;
    },
  },
});

export const selectAllStories = (state) => state.stories; // Return the actual state value

export const { addLike } = storiesSlice.actions;

export default storiesSlice.reducer;
