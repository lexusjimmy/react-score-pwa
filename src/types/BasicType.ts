import { DefaultRootState } from "react-redux";
import { TeamPointType } from "./AddPointType";
import { TeamConfigType } from "./TeamConfigType";

export interface BasicActionType {
    type: ActionType;
    payload: {};
}

export enum ActionType {
    ADD_POINT = 'ADD_POINT',
    MINUS_POINT = 'MINUS_POINT',
    ROLL_BACK = 'ROLL_BACK', 
    EDIT_TEAM_NAME = 'EDIT_TEAM_NAME',
    EDIT_TEAM_PLACE = 'EDIT_TEAM_PLACE'
}

export type StoreStateType = DefaultRootState & {
    teamPoints: TeamPointType[];
    teamConfigs: TeamConfigType[];
}