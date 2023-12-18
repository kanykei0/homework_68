import { createSlice } from "@reduxjs/toolkit";
import { tasksList } from "../../type";
import { fetchTasks } from "./ToDoThunks";

interface TaskState {
  tasks: tasksList | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: TaskState = {
  tasks: null,
  isLoading: false,
  isError: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const taskReducer = tasksSlice.reducer;
