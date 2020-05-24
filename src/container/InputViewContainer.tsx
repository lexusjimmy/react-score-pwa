import React, { ReactElement, useState } from "react";
import LabelInputComponent from "../components/LabelInputComponent";
import LabelViewComponent from "../components/LabelViewComponent";
import { useSelector, useDispatch } from "react-redux";
import { StoreStateType } from "../types/BasicType";
import { editTeamName } from "../actions";

type InputViewContainerProps = {
  teamId: number;
};

const InputViewContainer: React.FC<InputViewContainerProps> = function InputViewContainer(
  props
): ReactElement {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const teamName: string = useSelector((state: StoreStateType) => {
    const targetTeam = state.teamConfigs.find(
      (teamConfig) => teamConfig.teamId === props.teamId
    );
    return targetTeam ? targetTeam.name : "";
  });
  const dispatch = useDispatch();
  const submitNameHandler = (e: React.MouseEvent, labelVal: string)=> {
      e.preventDefault();
      dispatch(editTeamName({teamId: props.teamId, name: labelVal}));
      setIsEditing(false);
  }
  const editHandler: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };
  return (
    <>
      {isEditing ? (
        <LabelInputComponent label={teamName} onLabelSubmit={submitNameHandler} />
      ) : (
        <LabelViewComponent label={teamName} onEditClick={editHandler} />
      )}
    </>
  );
};

export default InputViewContainer;
