import { configureStore } from "@reduxjs/toolkit";
import listAPIDetails from "../features/listAPIDetails";
import listAPI from "../features/listAPI";

const store = configureStore({
  reducer: {
    listAPIDetails: listAPIDetails.reducer,
    listAPI: listAPI.reducer,
  },
});

export default store;
