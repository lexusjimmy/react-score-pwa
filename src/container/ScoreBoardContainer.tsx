import React, { ReactElement } from "react";
import ScoreBoard from "../components/ScoreBoard";
import { useSelector } from "react-redux";
import { StoreStateType } from "../types/BasicType";
import styled from "styled-components";

type ScoreBoardContainerProps = {
  placeId: number;
};
const NameBox = styled.div`
    text-align: center;
`;

const ScoreBoardContainer: React.FC<ScoreBoardContainerProps> = function ScoreBoardContainer(
  props
): ReactElement {
  const teamScore: number = useSelector((state: StoreStateType) => {
    let accumScore: number = 0;
    const teamId = state.teamConfigs.find((teamConfig)=> teamConfig.placeId === props.placeId)?.teamId;
    state.teamPoints
      .filter((teamPoint) => teamPoint.teamId === teamId)
      .map((teamPoint) => {
        accumScore += teamPoint.point;
      });
    return accumScore;
  });
  const teamName: string = useSelector((state: StoreStateType)=> {
      return state.teamConfigs.filter((teamConfig)=> teamConfig.placeId === props.placeId)[0].name;
  });
  return (
      <>
        <NameBox>{teamName}</NameBox>
        <ScoreBoard score={teamScore} />
      </>
  );
};

export default ScoreBoardContainer;
