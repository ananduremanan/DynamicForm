import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  data: any;
}

const initialState: DataState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<any>) => {
      const newData = action.payload;
      const index = state.data.findIndex(
        (data: any) =>
          data.blockId === newData.blockId && data.jsonKey === newData.jsonKey
      );
      if (index !== -1) {
        state.data[index] = newData;
      } else {
        state.data.push(newData);
      }
    },
  },
});

export const { setFormData } = dataSlice.actions;

export default dataSlice.reducer;
