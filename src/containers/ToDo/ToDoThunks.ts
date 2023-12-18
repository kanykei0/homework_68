import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { tasksList } from "../../type";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axiosApi.get<tasksList>("tasks.json");
  return response.data;
});

export const toggleTaskStatus = createAsyncThunk(
  "tasks/toggleTaskStatus",
  async ({ id, status }: { id: string; status: boolean }) => {
    const response = await axiosApi.patch<tasksList>(`tasks/${id}.json`, {
      status,
    });
    return response.data;
  }
);
