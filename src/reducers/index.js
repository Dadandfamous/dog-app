import { combineReducers } from "redux";
import dogs from "./game2";
import dogs1 from './game1'
import dogImages from "./dogImages";

export default combineReducers({
  dogs,
  dogs1,
  dogImages
});
