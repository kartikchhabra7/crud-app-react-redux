import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./store/userSlicer";

export const store = configureStore({
  reducer: {
    user: userSlicer,
  },
});
