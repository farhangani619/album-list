import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, {}, middleware);

export const persistor = persistStore(store);
export default { store, persistor };
