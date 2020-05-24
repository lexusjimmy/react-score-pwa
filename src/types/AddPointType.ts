import { BasicActionType } from "./BasicType";

export type AddPointType = BasicActionType & {
    payload: AddPointVariables;
}

export type AddPointVariables = {
    teamId: number;
    point: number;
}

// making type for state
export type TeamPointType = {
    id: number;
    teamId: number;
    point: number;
}
