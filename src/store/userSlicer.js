import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.findIndex((user) => user.id === updatedUser.id);

      if (index !== -1) {
        state[index] = updatedUser;
      }
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
