import { combineReducers } from "redux";
import dogs from "./dogs";
import dogImages from "./dogImages";

export default combineReducers({
  dogs,
  dogImages
});
