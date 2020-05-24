import styled from "styled-components";
import {Paper, Box} from '@material-ui/core'
import React, { ReactElement } from "react";


type ScoreBoardProps = {
    score: number;
}

const SizedPaper = styled(Paper)`
    height: 20vw;
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: auto;
    font-size: 15vw;
`;
function ScoreBoard(props: ScoreBoardProps): ReactElement {
    return (
        <SizedPaper>
            <Box textAlign="center">{props.score}</Box>
        </SizedPaper>
    )
}
export default ScoreBoard