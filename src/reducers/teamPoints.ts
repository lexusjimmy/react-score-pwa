import { AddPointType, TeamPointType } from "../types/AddPointType";
import { ActionType } from "../types/BasicType";
let pointId: number = 0;
export const generateNewId = ()=> {
    return pointId++;
}
export const getPointId = (): number => {
    return pointId;
}
const teamPoints = (state = [], action: AddPointType ): TeamPointType[] => {
    switch (action.type) {
        case ActionType.ADD_POINT:
            generateNewId();
            return [...state, {id:getPointId(), teamId: action.payload.teamId, point: action.payload.point}];
        // case ActionType.MINUS_POINT: 
        case ActionType.ROLL_BACK: 
            state.pop();
            return [...state];
        default:
            return state;
    }
}

export default teamPoints;