import { TeamConfigType, EditTeamConfigAction, EditTeamNameAction, EditTeamPlaceAction } from "../types/TeamConfigType";
import { ActionType } from "../types/BasicType";

const initTeamConfigState: TeamConfigType[] = [
  { teamId: 1, name: "", placeId: 1 },
  { teamId: 2, name: "", placeId: 2 },
];
const teamConfigs = (
  state = initTeamConfigState,
  action: EditTeamConfigAction
): TeamConfigType[] => {
  switch (action.type) {
    case ActionType.EDIT_TEAM_NAME:
      const targetTeamConfig = state.find(
        (teamConfig) => teamConfig.teamId === action.payload.teamId
      );
      const resultTeamConfig: TeamConfigType = {
        ...Object.assign({}, targetTeamConfig),
        name: (action as EditTeamNameAction).payload.name,
      };
      return [
        ...state.filter(
          (teamConfig) => teamConfig.teamId !== action.payload.teamId
        ),
        resultTeamConfig,
      ];
    case ActionType.EDIT_TEAM_PLACE:
      const targetTeam = state.find(
        (teamConfig) => teamConfig.teamId === action.payload.teamId
      );
      const resultTeam: TeamConfigType = {
        ...Object.assign({}, targetTeam),
        placeId: (action as EditTeamPlaceAction).payload.placeId,
      };
      return [
        ...state.filter(
          (teamConfig) => teamConfig.teamId !== action.payload.teamId
        ),
        resultTeam,
      ];
    default:
      return state;
  }
};

export default teamConfigs;
