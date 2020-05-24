import { Container, Grid, Box } from "@material-ui/core";
import styled from "styled-components";
import React, { ReactElement } from "react";

import ScoreBoardContainer from "../container/ScoreBoardContainer";
import AddPointButtonContainer from "../container/AddPointButtonContainer";
import HistoryRollBackContainer from "../container/HistoryRollBackContainer";
import ScoreTableContainer from "../container/ScoreTableContainer";
import PlaceExchangeButtonContainer from "../container/PlaceExchangeButtonContainer";
const CenterTextBox = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15vw;
  font-weight: bold;
`;
const TopPageWrapper: React.FC = function TopPageWrapper(): ReactElement {
  return (
    <Container>
      <Grid container>
        <Grid item xs={5}>
          <Box textAlign={"center"}>
            <ScoreBoardContainer placeId={1} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <CenterTextBox>ー</CenterTextBox>
        </Grid>
        <Grid item xs={5}>
          <Box textAlign={"center"}>
            <ScoreBoardContainer placeId={2} />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <Box textAlign={"center"}>
            <AddPointButtonContainer point={1} teamId={1} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box textAlign={"center"}>
            <HistoryRollBackContainer />
            <PlaceExchangeButtonContainer />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box textAlign={"center"}>
            <AddPointButtonContainer point={1} teamId={2} />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <ScoreTableContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopPageWrapper;
