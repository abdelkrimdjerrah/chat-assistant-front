import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISession {
  sessionId: string;
}

const initialState: ISession = {
  sessionId: '',
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionId: (
      state,
      action: PayloadAction<string>
    ) => {
      state.sessionId = action.payload;
    },
    clearSessionId: (
      state
    ) => {
      state.sessionId = '';
    },
  },
});

export const selectSessionId = (state: any) => {
  return state.session.sessionId;
};

export const { 
  setSessionId,
  clearSessionId
 } = sessionSlice.actions;

export default sessionSlice.reducer;
