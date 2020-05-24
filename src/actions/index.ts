import { AddPointVariables, AddPointType } from "../types/AddPointType";
import { ActionType, BasicActionType } from "../types/BasicType";
import { EditTeamNameVariables, EditTeamNameAction, EditTeamPlaceVariables, EditTeamPlaceAction } from "../types/TeamConfigType";

export const addPoint = ({point = 1, teamId}: AddPointVariables): AddPointType => ({
    type: ActionType.ADD_POINT,
    payload: {
        point,
        teamId
    }
})

export const rollBack = (): BasicActionType => ({
    type: ActionType.ROLL_BACK,
    payload: {}
});

export const editTeamName = ({teamId, name}: EditTeamNameVariables): EditTeamNameAction => ({
    type: ActionType.EDIT_TEAM_NAME,
    payload: {
        teamId,
        name
    }
});

export const editTeamPlace = ({teamId, placeId}: EditTeamPlaceVariables): EditTeamPlaceAction=> ({
    type: ActionType.EDIT_TEAM_PLACE,
    payload: {
        teamId,
        placeId
    }
});
