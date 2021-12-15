import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  debug: true,
  storage,
  whitelist: ["movies", "moviesFavorite"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;