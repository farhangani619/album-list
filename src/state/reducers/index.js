import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import albumReducer from "./albumReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["album"],
};

const rootReducer = combineReducers({
  album: albumReducer,
});
export default persistReducer(persistConfig, rootReducer);
// export default reducers;
