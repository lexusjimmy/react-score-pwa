import { IconButton } from "@material-ui/core"
import { Add as AddButton } from "@material-ui/icons"
import { useDispatch } from "react-redux"
import React, { ReactElement } from "react";
import { addPoint } from "../actions";

type AddPointButtonContainerProps = {
    point: number;
    teamId: number;
}

const AddPointButtonContainer: React.FC<AddPointButtonContainerProps> = function AddPointButtonContainer(props): ReactElement {
    const dispatch = useDispatch();
    return (
        <IconButton onClick={()=> dispatch(addPoint({point: props.point, teamId: props.teamId}))}>
            <AddButton />
        </IconButton>
    )
}

export default AddPointButtonContainer;
