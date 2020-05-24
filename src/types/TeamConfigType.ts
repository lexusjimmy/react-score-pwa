import { BasicActionType } from "./BasicType"

// use | to extend type and have different kind of payload
export type EditTeamConfigAction = EditTeamNameAction | EditTeamPlaceAction;

export type EditTeamNameAction = BasicActionType & {
    payload: EditTeamNameVariables;
}

export type EditTeamPlaceAction = BasicActionType & {
    payload: EditTeamPlaceVariables;
}

export type EditTeamNameVariables = {
    teamId: number;
    name: string;
}

export type EditTeamPlaceVariables = {
    teamId: number;
    placeId: number;
}

export type TeamConfigType = {
    teamId: number;
    name: string;
    placeId: number;
}