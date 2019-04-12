import { combineReducers } from "redux";
import dogs from "./game2";
import dogs1 from './game1'
import dogImages from "./dogImages";
import list from "./list"

export default combineReducers({
  dogs,
  dogs1,
  dogImages, 
  list
});
