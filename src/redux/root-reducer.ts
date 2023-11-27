import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";
import sessionSlice from "./sessionSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","session"],
};

const rootReducer = combineReducers({
  user: userSlice,
  session: sessionSlice,
});


export const persistedReducer = persistReducer(persistConfig, rootReducer);
