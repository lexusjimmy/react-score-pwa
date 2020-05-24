import { combineReducers } from "redux";
import teamPoints from "./teamPoints";
import teamConfigs from "./teamConfigs";

export default combineReducers({
    teamPoints,
    teamConfigs
});
