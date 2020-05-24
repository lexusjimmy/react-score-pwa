import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditTeamPlaceVariables } from "../types/TeamConfigType";
import { StoreStateType } from "../types/BasicType";
import { editTeamPlace } from "../actions";
import { IconButton } from "@material-ui/core";
import { SyncAlt } from "@material-ui/icons";

export const MAX_PLACE_ID = 2;
export const MIN_PLACE_ID = 1;

const PlaceExchangeButtonContainer: React.FC = function PlaceExchangeButtonContainer(): ReactElement {
    const dispatch = useDispatch();
    const teamPlaces: EditTeamPlaceVariables[] = useSelector((state: StoreStateType)=> {
        let teamPlaceArr: EditTeamPlaceVariables[] = [];
        state.teamConfigs.map((teamConfig)=> {
            teamPlaceArr.push({
                teamId: teamConfig.teamId,
                placeId: teamConfig.placeId
            });
        });
        return teamPlaceArr;
    });
    const onClick: React.MouseEventHandler = (event)=> {
        event.preventDefault();
        teamPlaces.map((teamPlace)=> {
            dispatch(editTeamPlace({teamId: teamPlace.teamId, placeId: teamPlace.placeId < MAX_PLACE_ID? teamPlace.placeId + 1 : MIN_PLACE_ID}));
        })
    } 
    return (
        <IconButton size="medium" onClick={onClick}>
            <SyncAlt/>
        </IconButton>
    );
};

export default PlaceExchangeButtonContainer;
