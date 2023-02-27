import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk(
  "posts/list",
  async (args, { rejectWithValue }) => {
    try {
      const list = JSON.parse(localStorage.getItem("list"));

      if (list !== null) {
        return list;
      }

      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      localStorage.setItem("list", JSON.stringify(response.data));
      if (response.status === 200) {
        return response.data;
      } else {
        const message = response.data;
        throw new Error(message.error);
      }
    } catch (e) {
      rejectWithValue(e.response.data);
    }
  }
);

const listAPI = createSlice({
  name: "listAPI",
  initialState: { value: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      });
  },
});

export default listAPI;
