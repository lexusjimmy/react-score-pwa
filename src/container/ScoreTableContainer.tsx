import React, { ReactElement } from "react";
import { StoreStateType } from "../types/BasicType";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InputViewContainer from "./InputViewContainer"

const StyledTable = styled.table`
  th{
    border: solid 1px black;
  }
  td {
    border: solid 1px black;
    padding: 5px;
    text-align: center;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

const ScoreTableContainer: React.FC = function ScoreTableContainer(): ReactElement {
  const teamIds: number[] = [1, 2];
  const makePointRow: (teamId: Number, state: StoreStateType) => number[] = (
    teamId,
    state
  ): number[] => {
    return state.teamPoints.map((pointObj) =>
      teamId === pointObj.teamId ? pointObj.point : 0
    );
  };
  const pointTable: number[][] = useSelector((state: StoreStateType) => {
    return teamIds.map((teamId) => makePointRow(teamId, state));
  });
  return (
    <TableContainer>
      <StyledTable>
      <thead>
        <tr>
          <th>name</th>
          {pointTable[0].map((val, index)=> {
            return <th key={'th'+ String(index)}>{index + 1}</th>
          })}
          <th>sum</th>
        </tr>
      </thead>
      <tbody>
        {pointTable.map((rowData, index) => {
          return (
            <tr key={index}>
              <td><InputViewContainer teamId={index+1}/></td>
              {rowData.map((val, indexB) => (
                <td key={String(index) + String(indexB)}>{val ? val : ""}</td>
              ))}
              {rowData.length > 0 ? (
                <td>{rowData.reduce((acc, curr) => acc + curr)} </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
    </TableContainer>
    
  );
};

export default ScoreTableContainer;
