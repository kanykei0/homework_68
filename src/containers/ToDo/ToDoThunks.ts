import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { tasksList } from "../../type";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axiosApi.get<tasksList>("tasks.json");
  return response.data;
});
