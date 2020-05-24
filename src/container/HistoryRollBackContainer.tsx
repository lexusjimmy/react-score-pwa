import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { History as HistoryButton } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { rollBack } from "../actions";

const HistoryRollBackContainer: React.FC = function HistoryRollBackContainer(): ReactElement {
  const dispatch = useDispatch();
  return (
    <IconButton size="medium" aria-label="history" onClick={()=> dispatch(rollBack())}>
      <HistoryButton></HistoryButton>
    </IconButton>
  );
};

export default HistoryRollBackContainer;
