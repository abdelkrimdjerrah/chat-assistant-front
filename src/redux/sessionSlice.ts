import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISession {
  sessionId: string;
}

const initialState: ISession = {
  sessionId: '6560cb483449bf1d9129a829',
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
  },
});

export const selectSessionId = (state: any) => {
  return state.session.sessionId;
};

export const { setSessionId } = sessionSlice.actions;

export default sessionSlice.reducer;
